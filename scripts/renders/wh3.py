"""Woola strata cutaway v2 — archviz style: concrete, beams, pipes, basement parkade."""
import bpy, json, math, sys
sys.path.insert(0, __import__("os").path.dirname(__file__))
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

OUT = "/Users/samuelbrahem/Desktop/Woola/public/xray"
RES = (1360, 1600)
SAMPLES = 160

MAT = {}
def mat(name, hexcol, rough=0.6, metal=0.0):
    if name in MAT: return MAT[name]
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    c = tuple(pow(int(hexcol[i:i+2],16)/255, 2.2) for i in (1,3,5))
    b.inputs["Base Color"].default_value = (*c,1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    MAT[name]=m; return m

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    MAT.clear()
    sc = bpy.context.scene
    sc.render.engine="CYCLES"; sc.cycles.samples=SAMPLES; sc.cycles.use_denoising=True
    sc.render.film_transparent=True
    sc.render.resolution_x, sc.render.resolution_y = RES
    w = bpy.data.worlds.new("w"); sc.world=w; w.use_nodes=True
    w.node_tree.nodes["Background"].inputs["Strength"].default_value=1.3

def box(n,x0,y0,z0,x1,y1,z1,m):
    bpy.ops.mesh.primitive_cube_add()
    o=bpy.context.object; o.name=n
    o.location=((x0+x1)/2,(y0+y1)/2,(z0+z1)/2); o.scale=((x1-x0)/2,(y1-y0)/2,(z1-z0)/2)
    o.data.materials.append(m); return o

def cylv(n,x,y,z0,z1,r,m):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=z1-z0, location=(x,y,(z0+z1)/2))
    o=bpy.context.object; o.name=n; o.data.materials.append(m); return o

def cylh(n,axis,a0,a1,b,z,r,m):
    """horizontal cylinder along axis 'x' (b=y) or 'y' (b=x)."""
    L=a1-a0
    if axis=="x":
        loc=((a0+a1)/2,b,z); rot=(0,math.radians(90),0)
    else:
        loc=(b,(a0+a1)/2,z); rot=(math.radians(90),0,0)
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=L, location=loc)
    o=bpy.context.object; o.name=n; o.rotation_euler=rot
    o.data.materials.append(m); return o

CUTTER=None; CUTTER2=None
def make_cutters():
    global CUTTER, CUTTER2
    CUTTER=box("cutter",0,-500,-500,500,0,500,mat("cutm","#FF0000"))
    CUTTER.hide_render=True
    CUTTER2=box("cutter2",-0.35,-500,-500,500,0.35,500,mat("cutm","#FF0000"))
    CUTTER2.hide_render=True

def cut(o,deep=False):
    md=o.modifiers.new("cut","BOOLEAN"); md.operation="DIFFERENCE"
    md.object=CUTTER2 if deep else CUTTER; md.solver="EXACT"

def hollow(o,x0,y0,z0,x1,y1,z1,t=0.7):
    v=box(o.name+"_v",x0+t,y0+t,z0-1,x1-t,y1-t,z1-t,mat("cutm","#FF0000"))
    v.hide_render=True
    md=o.modifiers.new("h","BOOLEAN"); md.operation="DIFFERENCE"; md.object=v; md.solver="EXACT"


def apply_hdri(strength=0.5):
    w=bpy.context.scene.world; nt=w.node_tree
    env=nt.nodes.new("ShaderNodeTexEnvironment")
    env.image=bpy.data.images.load("/Users/samuelbrahem/Desktop/Woola/scripts/renders/assets/studio_small_09_1k.hdr")
    nt.links.new(env.outputs["Color"], nt.nodes["Background"].inputs["Color"])
    nt.nodes["Background"].inputs["Strength"].default_value=strength

def roughen(m, scale=7.0, fac=0.22, bumpstr=0.06):
    nt=m.node_tree; b=nt.nodes["Principled BSDF"]
    n=nt.nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value=scale
    ramp=nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color=(0.75,0.75,0.75,1)
    nt.links.new(n.outputs["Fac"], ramp.inputs["Fac"])
    mix=nt.nodes.new("ShaderNodeMixRGB"); mix.blend_type="MULTIPLY"; mix.inputs["Fac"].default_value=fac
    mix.inputs[1].default_value=b.inputs["Base Color"].default_value
    nt.links.new(ramp.outputs["Color"], mix.inputs[2])
    nt.links.new(mix.outputs["Color"], b.inputs["Base Color"])
    bump=nt.nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value=bumpstr
    nt.links.new(n.outputs["Fac"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], b.inputs["Normal"])

def bevel(o, w=0.05):
    bv=o.modifiers.new("bv","BEVEL"); bv.width=w; bv.segments=2

def cam_lights(target, ortho):
    d=120; az=math.radians(45); el=math.radians(30)
    loc=Vector((d*math.cos(el)*math.sin(az),-d*math.cos(el)*math.cos(az),d*math.sin(el)))+Vector(target)
    bpy.ops.object.camera_add(location=loc)
    cam=bpy.context.object
    cam.rotation_euler=(Vector(target)-loc).to_track_quat("-Z","Y").to_euler()
    cam.data.type="ORTHO"; cam.data.ortho_scale=ortho
    bpy.context.scene.camera=cam
    bpy.ops.object.light_add(type="SUN", location=(40,-20,60))
    s=bpy.context.object; s.data.energy=2.8; s.data.angle=math.radians(14)
    s.rotation_euler=(math.radians(35),math.radians(-18),math.radians(20))
    bpy.ops.object.light_add(type="AREA", location=(-25,-40,30))
    f=bpy.context.object; f.data.energy=3200; f.data.size=70
    f.rotation_euler=(math.radians(62),0,math.radians(-38))
    bpy.ops.mesh.primitive_plane_add(size=400, location=(target[0],target[1],-6))
    bpy.context.object.is_shadow_catcher=True
    return cam

# materials
def mats():
    return dict(
        conc=mat("conc","#C3C7C9",0.75),
        conc2=mat("conc2","#AEB3B6",0.75),
        slab=mat("slabm","#D6D9DA",0.7),
        glass=mat("glassm","#6D9FC0",0.08,0.2),
        interior=mat("intm","#F4F5F4",0.8),
        earth=mat("earthm","#5B564C",0.9),
        copper=mat("copperm","#B87333",0.35,0.7),
        white_pipe=mat("wpipe","#E9E9E7",0.4),
        dark_pipe=mat("dpipe","#3A3A38",0.45),
        duct=mat("ductm","#E3E4E1",0.5,0.2),
        equip=mat("equipm","#00788C",0.45),
        equip2=mat("equipm2","#1FA294",0.45),
        dark=mat("darkm","#2C2C2A",0.5),
        car=mat("carm","#6E7A84",0.35,0.3),
        roof=mat("roofm","#EDEEEC",0.6),
    )

def project(cam, pts):
    sc=bpy.context.scene; out={}
    for k,p in pts.items():
        co=world_to_camera_view(sc,cam,Vector(p))
        out[k]=[round(co.x*340),round((1-co.y)*400)]
    return out

def render(path):
    bpy.context.scene.render.filepath=path
    bpy.ops.render.render(write_still=True)


# ================= WAREHOUSE v2 =================
reset()
M=mats()
apply_hdri(0.5)
roughen(M["conc"]); roughen(M["conc2"], fac=0.28); roughen(M["earth"], scale=4, fac=0.4, bumpstr=0.15) if "earth" in M else None
make_cutters()
import importlib, woola_assets
importlib.reload(woola_assets)
LIB = woola_assets.make_lib(box, cylv, cylh, mat)

o=box("pad",-26,-14,-0.7,26,14,0,M["conc2"]); cut(o)
o=box("hall",-24,-12,0,24,12,14,M["conc"]); hollow(o,-24,-12,0,24,12,14,0.6); cut(o); bevel(o)
fl=box("floor",-23.4,-11.4,0,23.4,11.4,0.3,M["conc2"]); cut(fl,deep=True)
o=box("roofcap",-24.3,-12.3,14.0,24.3,12.3,14.4,M["roof"]); cut(o)
def glass_grid(face,fixed,u0,u1,v0,v1,cols,rows):
    uw=(u1-u0)/cols; vh=(v1-v0)/rows
    for r in range(rows):
        for c in range(cols):
            a0=u0+c*uw+0.25; a1=u0+(c+1)*uw-0.25
            b0=v0+r*vh+0.2; b1=v0+(r+1)*vh-0.2
            if face=="x": o=box(f"g{face}{r}{c}",fixed-0.05,a0,b0,fixed+0.14,a1,b1,M["glass"])
            else: o=box(f"g{face}{r}{c}",a0,fixed-0.14,b0,a1,fixed+0.05,b1,M["glass"])
            cut(o)
glass_grid("x",24,1,11,10.8,13,3,1)
glass_grid("y",-12,-23,23,10.8,13,8,1)
# roof joists visible in section
for i in range(8):
    x=-21+i*6
    j=box(f"joist{i}",x-0.18,-11.4,12.4,x+0.18,11.4,13.3,M["dark_pipe"]); cut(j,deep=True)
# columns along centre
for x in (-16,-8,8,16):
    c=box(f"colw{x}",x-0.35,0.5,0,x+0.35,1.2,12.4,M["conc2"]); cut(c,deep=True)
# racking
rackm=mat("rackm","#C96A28",0.55)
shelfm=mat("shelfm","#8A8F93",0.5,0.3)
for x in (4,10,16):
    for xs in (-x-2,-x-0.3,x,x+1.7):
        box(f"rk{xs}",xs,2,0.3,xs+0.3,10.5,8.5,rackm)
    for zz in (2.6,5.2,7.8):
        box(f"sh{x}{zz}",-x-2,2,zz,-x,10.5,zz+0.25,shelfm)
        box(f"sh2{x}{zz}",x,2,zz,x+2,10.5,zz+0.25,shelfm)
# gas heaters + gas line
LIB["gas_heater"]((-4.7,2.1,9.6), 2.0)
LIB["gas_heater"]((7.2,2.3,9.6), 2.0, math.radians(-15))
cylh("gasline","x",-23,9,4,11.9,0.18,M["copper"])
cylh("gasdrop1","x",-6,-5.7,4,11.9,0.18,M["copper"])
# cold room
box("cold",14,2,0.3,23,11,7,mat("coldm","#9ED4E0",0.3))
box("colddoor",14.0,4,0.3,14.15,7,5.4,mat("colddoorm","#5E8994",0.4))
box("coldunit",17,5,7,20,8,8.2,mat("condunit","#C9CCCB",0.4,0.4))
LIB["import_gltf"]("/tmp/ph_assets/modular_industrial_pipes_01/modular_industrial_pipes_01_1k.gltf", (-20,1.5,6), 1.5, 0)
# electrical room
box("panelw",-12,0.6,0.3,-10.4,4,5,M["dark"])
# interior lights
for lx,ly,e in [(-12,5,2600),(8,6,2600),(0,-6,1800)]:
    bpy.ops.object.light_add(type="POINT", location=(lx,ly,9))
    lp=bpy.context.object; lp.data.energy=e; lp.data.shadow_soft_size=1.5
# dock: canopy + doors on +x face
for i,y in enumerate([-9,-4.5,0]):
    dd=box(f"dock{i}",23.9,y,0,24.16,y+3.4,4.6,M["slab"]); cut(dd)
cnp=box("canopy",24,-10,5.2,26.5,1.5,5.6,M["dark_pipe"]); cut(cnp)
# RTUs
LIB["rtu"]((-14.4,5.6,14.4), 0.30)
LIB["rtu"]((-0.4,9.6,14.4), 0.26, math.radians(90))
LIB["rtu"]((13.6,4.6,14.4), 0.30)
cam=cam_lights((0,0,6),64)
res={}
res["warehouse"]=project(cam,{
    "rtu":(-14.4,5.6,16.3),
    "roof":(5,8,14.6),
    "heaters":(-4.7,2.1,11.0),
    "highbay":(-19,3,12.8),
    "refrigeration":(18,5.5,8.4),
    "panel":(-11.2,2.3,5.4),
    "dock":(24.5,-6,5.4),
})
render(f"{OUT}/warehouse.png")
print("HOTSPOTS_JSON="+json.dumps(res))

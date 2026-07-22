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

# ================= STRATA v3 =================
reset()
M=mats()
apply_hdri(0.5)
roughen(M["conc"]); roughen(M["conc2"], fac=0.28); roughen(M["earth"], scale=4, fac=0.4, bumpstr=0.15) if "earth" in M else None
make_cutters()
import importlib, woola_assets
importlib.reload(woola_assets)
LIB = woola_assets.make_lib(box, cylv, cylh, mat)
W=9; D=9; TOP=40; B=-6  # tower half-extent, roof z, basement depth

# earth pedestal with basement
o=box("earth",-16,-16,B,16,16,0,M["earth"]); hollow(o,-16,-16,B,16,16,0,1.2); cut(o); bevel(o,0.08)
box("pfloor",-14.8,-14.8,B+0.0,14.8,14.8,B+0.35,M["conc2"]).name="pfloor"
pf=bpy.data.objects["pfloor"]; cut(pf,deep=True)
# parkade columns
for (cx,cy) in [(-10,-10),(-10,0.8),(-10,10),(0.8,10),(10,10),(-0.8,-10)]:
    c=box(f"pc{cx}{cy}",cx-0.5,cy-0.5,B+0.35,cx+0.5,cy+0.5,0,M["conc2"]); cut(c,deep=True)
# car (CC0 covered car)
LIB["import_gltf"]("/tmp/ph_assets/covered_car/covered_car_1k.gltf", (-10.5,3.6,B+0.36), 1.6, math.radians(90))
# basement mech room: boilers + pump + panel
LIB["boiler"]((-5.5,1.6,B+0.35), 1.25)
LIB["boiler"]((-2.8,1.9,B+0.35), 1.05, math.radians(15))
LIB["genset"]((9.0,2.6,B+0.35), 0.36)
box("bpanel",-8.6,0.8,B+0.35,-7.6,2.2,B+3.2,M["dark"])
LIB["ev_charger"]((3.0,1.2,B+0.36), 1.3)
LIB["ev_charger"]((4.8,1.2,B+0.36), 1.3)

# parkade liner (light interior walls) + basement lights
o=box("liner",-14.9,-14.9,B,14.9,14.9,-0.6,M["slab"]); hollow(o,-14.9,-14.9,B,14.9,14.9,-0.6,0.4); cut(o)
for lx,ly,e in [(-8,3,3200),(-2,3,3200),(4,3,3200),(10,3,3200),(2,-4,2600),(-4,-4,2200)]:
    bpy.ops.object.light_add(type="POINT", location=(lx,ly,-1.8))
    lp=bpy.context.object; lp.data.energy=e; lp.data.shadow_soft_size=1.5

# tower shell (concrete) + curtain glass
o=box("tower",-W,-D,0,W,D,TOP,M["conc"]); hollow(o,-W,-D,0,W,D,TOP); cut(o); bevel(o)
mull=mat("mullm","#2A2E31",0.5,0.2)
mx=box("mullx",W-0.12,-D+0.7,1.0,W-0.02,D-0.7,TOP-1.0,mull); cut(mx)
my=box("mully",-W+0.7,-D+0.02,1.0,W-0.7,-D+0.12,TOP-1.0,mull); cut(my)
# glass: big panels with mullions on two facades
def glass_grid(face,fixed,u0,u1,v0,v1,cols,rows):
    uw=(u1-u0)/cols; vh=(v1-v0)/rows
    for r in range(rows):
        for c in range(cols):
            a0=u0+c*uw+0.22; a1=u0+(c+1)*uw-0.22
            b0=v0+r*vh+0.3; b1=v0+(r+1)*vh-0.3
            if face=="x": o=box(f"g{face}{r}{c}",fixed-0.05,a0,b0,fixed+0.14,a1,b1,M["glass"])
            else: o=box(f"g{face}{r}{c}",a0,fixed-0.14,b0,a1,fixed+0.05,b1,M["glass"])
            cut(o)
glass_grid("x",W,-D+0.8,D-0.8,1.2,TOP-1.2,3,8)
glass_grid("y",-D,-W+0.8,W-0.8,1.2,TOP-1.2,3,8)

# slabs + beams + columns + core
for f in range(9):
    z=f*4.9 if f>0 else 0.01
    z=0.35+f*4.9
    if z>TOP-0.3: break
    sl=box(f"slab{f}",-W+0.25,-D+0.25,z-0.35,W-0.25,D-0.25,z,M["slab"]); cut(sl,deep=True)
    # beams under slab along both section faces
    b1=box(f"bmx{f}",-W+0.3,0.4,z-1.1,W-0.3,1.1,z-0.35,M["conc2"]); cut(b1,deep=True)
    b2=box(f"bmy{f}",-1.1,-D+0.3,z-1.1,-0.4,D-0.3,z-0.35,M["conc2"]); cut(b2,deep=True)
core=box("core",-2,1,0,2,5,TOP,M["conc2"]); cut(core,deep=True)
for (cx,cy) in [(-5.5,-5.5),(-5.5,5.5),(5.5,5.5)]:
    c=box(f"col{cx}{cy}",cx-0.45,cy-0.45,0,cx+0.45,cy+0.45,TOP,M["conc2"]); cut(c,deep=True)

# pipe risers: copper + white + dark bundle near section corner, basement to roof
cylv("rise1",-1.5,-6.5,B+0.4,TOP,0.34,M["copper"])
cylv("rise2",-2.4,-6.5,B+0.4,TOP,0.34,M["white_pipe"])
cylv("rise3",-3.3,-6.5,B+0.4,TOP,0.3,M["dark_pipe"])
# horizontal branches under each slab + duct
for f in range(8):
    z=0.35+f*4.9
    cylh(f"brx{f}","x",-W+0.6,-1.5,-6.5,z+3.4,0.2,M["copper"])
    cylh(f"bry{f}","y",-6.5,-1.0,-2.4,z+3.7,0.2,M["white_pipe"])
    d=box(f"duct{f}",-W+0.6,-4.6,z+2.6,-4.4,-3.4,z+3.3,M["duct"])

# roof: parapet + penthouse + RTUs + rooftop pipes
o=box("pent",-5,-5,TOP,5,5,TOP+3,M["conc"]); cut(o); bevel(o)
# balconies on the two kept facade halves
railm=mat("railm","#8FB6C4",0.1,0.3)
for f in range(1,8):
    z=0.35+f*4.9
    for (y0,y1) in [(1.2,4.2),(5.0,8.0)]:
        bb=box(f"balc{f}{y0}",W,y0,z-0.15,W+1.5,y1,z+0.15,M["slab"]); cut(bb)
        rr=box(f"rail{f}{y0}",W+1.38,y0,z+0.15,W+1.5,y1,z+1.15,railm); cut(rr)
    for (x0,x1) in [(-8.0,-5.0),(-4.2,-1.2)]:
        bb=box(f"balcL{f}{x0}",x0,-D-1.5,z-0.15,x1,-D,z+0.15,M["slab"]); cut(bb)
        rr=box(f"railL{f}{x0}",x0,-D-1.5,z+0.15,x1,-D-1.38,z+1.15,railm); cut(rr)
# entrance: glass doors + canopy on podium left face
box("door",-5.5,-13.15,0,-2.5,-13.0,3.4,M["glass"])
box("canopy",-6.2,-14.6,3.4,-1.8,-13.0,3.75,M["conc2"])
LIB["rtu"]((-2.6,3.0,TOP+3), 0.30)
LIB["rtu"]((2.8,-3.2,TOP), 0.26, math.radians(90))
cylh("roofpipe","x",-7.5,-5.5,6.5,TOP+0.6,0.22,M["copper"])
LIB["import_gltf"]("/tmp/ph_assets/modular_airduct_rectangular_01/modular_airduct_rectangular_01_1k.gltf", (2,1.4,B+4.7), 1.4, 0)

cam=cam_lights((0,0,17),62)
res={"strata":project(cam,{
    "rtu":(-2.7,3.0,TOP+4.7),
    "envelope":(W,-D+1.6,TOP-2),
    "suites":(-4.5,-4.5,22),
    "boiler":(-5.5,1.6,B+3.6),
    "panel":(-8.1,1.5,B+3.4),
    "generator":(9.0,2.6,B+2.6),
    "ev":(3.9,1.2,B+2.2),
})}
render(f"{OUT}/strata.png")
print("HOTSPOTS_JSON="+json.dumps(res))

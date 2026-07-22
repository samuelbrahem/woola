"""Woola equipment renders: RTU + standby generator with part-anchor projection."""
import bpy, json, math
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

OUT = "/Users/samuelbrahem/Desktop/Woola/public/equipment-renders"
RES = (1600, 1200)  # 4:3

MAT = {}
def mat(name, hexcol, rough=0.55, metal=0.0):
    if name in MAT: return MAT[name]
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    c = tuple(pow(int(hexcol[i:i+2],16)/255, 2.2) for i in (1,3,5))
    b.inputs["Base Color"].default_value = (*c,1)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    MAT[name] = m; return m

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    MAT.clear()
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"; sc.cycles.samples = 96; sc.cycles.use_denoising = True
    sc.render.film_transparent = True
    sc.render.resolution_x, sc.render.resolution_y = RES
    w = bpy.data.worlds.new("w"); sc.world = w; w.use_nodes = True
    w.node_tree.nodes["Background"].inputs["Strength"].default_value = 1.0

def box(n,x0,y0,z0,x1,y1,z1,m,bevel=0.06):
    bpy.ops.mesh.primitive_cube_add()
    o=bpy.context.object; o.name=n
    o.location=((x0+x1)/2,(y0+y1)/2,(z0+z1)/2); o.scale=((x1-x0)/2,(y1-y0)/2,(z1-z0)/2)
    if bevel:
        md=o.modifiers.new("bv","BEVEL"); md.width=bevel; md.segments=2
    o.data.materials.append(m); return o

def cyl(n,loc,r,depth,m,rot=None):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=depth, location=loc)
    o=bpy.context.object; o.name=n
    if rot: o.rotation_euler=rot
    o.data.materials.append(m); return o

def cam_lights(target, ortho):
    d=60; az=math.radians(38); el=math.radians(28)
    loc=Vector((d*math.cos(el)*math.sin(az), -d*math.cos(el)*math.cos(az), d*math.sin(el)))+Vector(target)
    bpy.ops.object.camera_add(location=loc)
    cam=bpy.context.object
    cam.rotation_euler=(Vector(target)-loc).to_track_quat("-Z","Y").to_euler()
    cam.data.type="ORTHO"; cam.data.ortho_scale=ortho
    bpy.context.scene.camera=cam
    bpy.ops.object.light_add(type="SUN", location=(30,-15,40))
    s=bpy.context.object; s.data.energy=3.0; s.data.angle=math.radians(15)
    s.rotation_euler=(math.radians(38), math.radians(-15), math.radians(15))
    bpy.ops.object.light_add(type="AREA", location=(-20,-25,20))
    f=bpy.context.object; f.data.energy=900; f.data.size=45
    f.rotation_euler=(math.radians(60),0,math.radians(-38))
    bpy.ops.mesh.primitive_plane_add(size=200, location=(target[0],target[1],0))
    bpy.context.object.is_shadow_catcher=True
    return cam

def project(cam, pts, w=100, hgt=75):
    sc=bpy.context.scene; out={}
    for k,p in pts.items():
        co=world_to_camera_view(sc, cam, Vector(p))
        out[k]=[round(co.x*w,1), round((1-co.y)*hgt,1)]
    return out

def render(path):
    bpy.context.scene.render.filepath=path
    bpy.ops.render.render(write_still=True)

results={}

# ---------------- ROOFTOP UNIT ----------------
reset()
grey=mat("cab","#DCD8CE"); grey2=mat("cab2","#CFCabF".replace("ab","AB"),0.55) if False else mat("cab2","#CFCABF")
dark=mat("dark","#3A3A38",0.5); teal=mat("teal","#00788C",0.5)
louv=mat("louv","#B9B3A4",0.6); fanm=mat("fan","#1F1F1D",0.4)
# curb + cabinet
box("curb",-9,-3.6,0,9,3.6,0.9,dark,0.03)
box("cab",-9,-3.5,0.9,9,3.5,5.6,grey)
# panel seams: thin proud strips
for x in (-4.5,0.2,4.8):
    box(f"seam{x}",x,-3.56,1.1,x+0.12,3.56,5.4,grey2,0.01)
# condenser end: louvered coil section
for i in range(7):
    box(f"lv{i}",-8.85,-3.62,1.4+i*0.55,-4.9,3.62,1.62+i*0.55,louv,0.01)
# fans on top of condenser end
cyl("fan1",(-7.2,-1.6,5.68),1.35,0.25,fanm)
cyl("fan2",(-7.2,1.6,5.68),1.35,0.25,fanm)
cyl("fanhub1",(-7.2,-1.6,5.8),0.28,0.3,grey2)
cyl("fanhub2",(-7.2,1.6,5.8),0.28,0.3,grey2)
# economizer hood
box("hood",4.2,-3.95,3.4,7.6,-3.45,5.3,grey2,0.04)
box("hoodtop",4.0,-4.05,5.1,7.8,-3.4,5.5,grey,0.04)
# gas flue
cyl("flue",(2.6,-3.75,4.6),0.32,1.6,dark,(math.radians(90),0,0))
# control panel + disconnect
box("ctrl",7.4,-3.68,1.5,8.6,-3.5,3.2,dark,0.02)
box("disc",6.6,-3.66,1.7,7.2,-3.52,2.5,teal,0.02)
# duct collars under (supply/return) shown at back-right on roofline
box("duct1",1.2,3.5,0.2,3.2,5.2,2.2,grey2,0.03)
box("duct2",4.2,3.5,0.2,6.2,5.2,2.2,grey2,0.03)
# filter access door
box("filt",0.4,-3.58,1.5,3.6,-3.5,4.9,grey2,0.02)
box("filth",1.8,-3.66,3.0,2.2,-3.6,3.4,dark,0.01)
cam=cam_lights((0,0,3),26)
results["rooftop-unit"]=project(cam,{
    "compressor":(-2.5,-3.5,3.2),
    "condenser":(-6.9,-3.6,3.0),
    "fans":(-7.2,-0.2,5.9),
    "filters":(2.0,-3.6,3.6),
    "economizer":(5.9,-3.8,4.9),
    "gasheat":(2.6,-3.75,5.2),
    "controls":(8.0,-3.6,2.4),
    "ducts":(3.2,4.3,2.0),
})
render(f"{OUT}/rooftop-unit.png")

# ---------------- STANDBY GENERATOR ----------------
reset()
grey=mat("cab","#DCD8CE"); dark=mat("dark","#3A3A38",0.5); teal=mat("teal","#00788C",0.5)
green=mat("blk","#28322F",0.45); alu=mat("alu","#B9B3A4",0.35,0.4); tank=mat("tank","#4A463E",0.5)
# base fuel tank
box("tank",-10,-2.8,0,10,2.8,2.2,tank,0.05)
# skid rails
box("skid",-10,-2.9,2.2,10,-2.55,2.5,dark,0.02)
box("skid2",-10,2.55,2.2,10,2.9,2.5,dark,0.02)
# engine block
box("engine",-2.5,-2.2,2.5,4.5,2.2,6.4,green)
# valve covers
box("vc",-1.8,-1.2,6.4,3.8,1.2,7.0,dark,0.04)
# alternator (cylinder at rear)
cyl("alt",(6.8,0,4.4),1.9,4.4,alu,(0,math.radians(90),0))
box("altfoot",5.2,-1.6,2.5,8.4,1.6,3.0,dark,0.03)
# radiator front
box("rad",-6.8,-2.3,2.5,-4.6,2.3,6.8,grey,0.04)
box("radgrille",-6.95,-1.9,3.0,-6.8,1.9,6.3,dark,0.02)
# fan shroud between radiator and engine
cyl("shroud",(-4.0,0,4.6),1.7,1.0,dark,(0,math.radians(90),0))
# exhaust silencer on top
cyl("silencer",(0.6,0.9,7.9),0.75,5.5,alu,(0,math.radians(90),0))
cyl("stack",(3.0,0.9,9.2),0.3,1.8,dark)
# control cabinet
box("ctrl",8.7,-2.4,2.5,10.6,2.4,7.2,grey,0.05)
box("screen",10.62,-1.2,5.0,10.68,1.2,6.4,teal,0.01)
# batteries beside tank
box("batt",-8.6,-2.2,2.5,-7.2,-0.6,3.6,dark,0.03)
box("battcap",-8.5,-2.1,3.6,-7.3,-0.7,3.75,teal,0.01)
cam=cam_lights((0,0,4),30)
results["generator"]=project(cam,{
    "engine":(1.0,-2.2,4.6),
    "radiator":(-5.9,-2.3,4.8),
    "alternator":(6.8,-1.7,4.6),
    "batteries":(-7.9,-2.2,3.2),
    "fuel":(-3,-2.8,1.2),
    "controller":(10.6,-1.8,5.8),
    "exhaust":(0.6,0.9,8.7),
})
render(f"{OUT}/generator.png")

print("EQUIP_HOTSPOTS_JSON="+json.dumps(results))

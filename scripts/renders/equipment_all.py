"""All 12 Woola equipment renders with part-anchor projection.
Run: blender -b -P equipment_all.py"""
import bpy, json, math, os
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = "/Users/samuelbrahem/Desktop/Woola/public/equipment-renders"
HDRI = os.path.join(HERE, "assets/studio_small_09_1k.hdr")
RES = (1600, 1200)

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
    sc.render.engine = "CYCLES"; sc.cycles.samples = 128; sc.cycles.use_denoising = True
    sc.render.film_transparent = True
    sc.render.resolution_x, sc.render.resolution_y = RES
    w = bpy.data.worlds.new("w"); sc.world = w; w.use_nodes = True
    nt = w.node_tree
    env = nt.nodes.new("ShaderNodeTexEnvironment")
    env.image = bpy.data.images.load(HDRI)
    nt.links.new(env.outputs["Color"], nt.nodes["Background"].inputs["Color"])
    nt.nodes["Background"].inputs["Strength"].default_value = 0.55

def box(n,x0,y0,z0,x1,y1,z1,m,bev=0.05):
    bpy.ops.mesh.primitive_cube_add()
    o=bpy.context.object; o.name=n
    o.location=((x0+x1)/2,(y0+y1)/2,(z0+z1)/2); o.scale=((x1-x0)/2,(y1-y0)/2,(z1-z0)/2)
    if bev:
        md=o.modifiers.new("bv","BEVEL"); md.width=bev; md.segments=2
    o.data.materials.append(m); return o

def cylz(n,x,y,z0,z1,r,m):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=z1-z0, location=(x,y,(z0+z1)/2))
    o=bpy.context.object; o.name=n; o.data.materials.append(m); return o

def cylx(n,x0,x1,y,z,r,m):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=x1-x0, location=((x0+x1)/2,y,z))
    o=bpy.context.object; o.name=n; o.rotation_euler=(0,math.radians(90),0)
    o.data.materials.append(m); return o

def cyly(n,y0,y1,x,z,r,m):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=y1-y0, location=(x,(y0+y1)/2,z))
    o=bpy.context.object; o.name=n; o.rotation_euler=(math.radians(90),0,0)
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
    s=bpy.context.object; s.data.energy=2.6; s.data.angle=math.radians(15)
    s.rotation_euler=(math.radians(38), math.radians(-15), math.radians(15))
    bpy.ops.object.light_add(type="AREA", location=(-20,-25,20))
    f=bpy.context.object; f.data.energy=800; f.data.size=45
    f.rotation_euler=(math.radians(60),0,math.radians(-38))
    bpy.ops.mesh.primitive_plane_add(size=200, location=(target[0],target[1],0))
    bpy.context.object.is_shadow_catcher=True
    return cam

def project(cam, pts):
    sc=bpy.context.scene; out={}
    for k,p in pts.items():
        co=world_to_camera_view(sc, cam, Vector(p))
        out[k]=[round(co.x*100,1), round((1-co.y)*75,1)]
    return out

def render(path):
    bpy.context.scene.render.filepath=path
    bpy.ops.render.render(write_still=True)

CUT=None
def wcut(x0,y0,z0,x1,y1,z1):
    """window cutter box; call once per scene before cutting shells"""
    global CUT
    CUT=box("wcut",x0,y0,z0,x1,y1,z1,mat("cutm","#FF0000"),0)
    CUT.hide_render=True
    return CUT

def ccut(o):
    md=o.modifiers.new("c","BOOLEAN"); md.operation="DIFFERENCE"; md.object=CUT; md.solver="EXACT"

def std_mats():
    return dict(
        grey=mat("cab","#DCD8CE",0.5), grey2=mat("cab2","#CFCABF",0.55),
        dark=mat("dark","#3A3A38",0.5), teal=mat("teal","#00788C",0.45),
        louv=mat("louv","#B9B3A4",0.6), alu=mat("alu","#B9B3A4",0.35,0.4),
        green=mat("blk","#28322F",0.45), copper=mat("copper","#B87333",0.35,0.7),
        steel=mat("steel","#8A8F93",0.4,0.5), red=mat("red","#8E3B2F",0.5),
    )

results={}

# ---------- 1. rooftop-unit ----------
reset(); m=std_mats()
box("curb",-9,-3.6,0,9,3.6,0.9,m["dark"],0.03)
cab=box("cab",-9,-3.5,0.9,9,3.5,5.6,m["grey"])
wcut(-3.5,-4.2,1.1,4.0,-0.2,5.2); ccut(cab)
# interior mechanicals
box("int_floor",-4.6,-3.3,1.0,4.4,3.3,1.25,m["dark"],0.01)
cylz("comp1",-2.2,-1.6,1.25,3.1,0.75,m["green"])
cylz("comp2",-0.7,-1.9,1.25,2.8,0.65,m["green"])
cylx("ctube",-2.2,-0.7,-1.6,2.9,0.12,m["copper"])
box("coil_int",1.0,-2.6,1.3,3.4,-2.0,4.8,mat("fins","#5E7A82",0.6,0.3),0.02)
cyly("blower",-1.4,0.6,-3.6,2.6,1.15,m["steel"])
box("bmotor",-4.4,-2.9,1.3,-3.3,-1.9,2.4,m["green"],0.03)
for x in (-4.5,0.2,4.8):
    sm=sm=sm=box(f"seam{x}",x,-3.56,1.1,x+0.12,3.56,5.4,m["grey2"],0.01); ccut(sm); ccut(sm); ccut(sm)
for i in range(7):
    box(f"lv{i}",-8.85,-3.62,1.4+i*0.55,-4.9,3.62,1.62+i*0.55,m["louv"],0.01)
cylz("fan1",-7.2,-1.6,5.6,5.85,1.35,m["dark"])
cylz("fan2",-7.2,1.6,5.6,5.85,1.35,m["dark"])
cylz("hub1",-7.2,-1.6,5.85,6.1,0.28,m["grey2"])
cylz("hub2",-7.2,1.6,5.85,6.1,0.28,m["grey2"])
box("hood",4.2,-3.95,3.4,7.6,-3.45,5.3,m["grey2"],0.04)
cyly("flue",-4.4,-3.4,2.6,4.6,0.32,m["dark"])
box("ctrl",7.4,-3.68,1.5,8.6,-3.5,3.2,m["dark"],0.02)
box("disc",6.6,-3.66,1.7,7.2,-3.52,2.5,m["teal"],0.02)

box("duct1",1.2,3.5,0.2,3.2,5.2,2.2,m["grey2"],0.03)
box("duct2",4.2,3.5,0.2,6.2,5.2,2.2,m["grey2"],0.03)
cam=cam_lights((0,0,3),26)
results["rooftop-unit"]=project(cam,{
    "compressor":(-1.5,-1.8,3.0),"condenser":(-6.9,-3.6,3.0),"fans":(-7.2,-0.2,6.1),
    "filters":(2.2,-2.3,3.4),"economizer":(5.9,-3.8,4.9),"gasheat":(2.6,-3.6,5.0),
    "controls":(8.0,-3.6,2.4),"ducts":(3.2,4.3,2.0)})
render(f"{OUT}/rooftop-unit.png")

# ---------- 2. generator (enclosed standby set) ----------
reset(); m=std_mats()
enc=mat("enc","#E6E3DB",0.45)
enc2=mat("enc2","#D8D5CC",0.5)
pad=mat("pad","#AEB3B6",0.8)
# concrete pad
box("pad",-9.5,-3.4,0,9.5,3.4,0.5,pad,0.03)
# base fuel tank
box("tank",-8.6,-2.9,0.5,8.6,2.9,2.0,mat("tank","#3F3C36",0.5),0.04)
# enclosure
box("enc",-8.6,-2.9,2.0,8.6,2.9,7.6,enc)
# radiator-end louver bank (right end, vertical louvers)
for i in range(9):
    box(f"lv{i}",8.62,-2.5+i*0.56,2.6,8.74,-2.16+i*0.56,7.0,m["louv"],0.01)
# air intake louvers left end
for i in range(9):
    box(f"lvl{i}",-8.74,-2.5+i*0.56,3.0,-8.62,-2.16+i*0.56,6.8,m["louv"],0.01)
# door seams + hinges + latches on front face
for x in (-5.6,-2.6,0.4,3.4,6.4):
    box(f"seam{x}",x,-2.96,2.3,x+0.1,-2.9,7.3,enc2,0.01)
for x in (-4.1,-1.1,1.9,4.9):
    box(f"latch{x}",x-0.12,-3.0,4.6,x+0.12,-2.9,5.1,m["dark"],0.01)
# controller window on front
box("ctrlwin",4.2,-2.98,5.4,6.0,-2.9,6.6,m["dark"],0.02)
box("ctrlscr",4.4,-3.0,5.6,5.4,-2.94,6.4,m["teal"],0.01)
# exhaust: roof-mounted silencer outlet
cylz("exh",6.4,1.6,7.6,9.1,0.34,m["alu"])
box("exhcap",6.05,1.25,9.05,6.75,1.95,9.3,m["dark"],0.02)
# roof seam / lifting points
box("roofcap",-8.7,-3.0,7.55,8.7,3.0,7.85,enc2,0.03)
# e-stop
box("estop",7.0,-2.98,4.0,7.5,-2.9,4.5,m["red"],0.01)
cam=cam_lights((0,0,4),28)
results["generator"]=project(cam,{
    "engine":(-1.0,-2.9,5.0),
    "radiator":(8.7,-1.4,4.8),
    "alternator":(-6.8,-2.9,5.0),
    "batteries":(-4.1,-2.95,3.0),
    "fuel":(-3,-2.9,1.3),
    "controller":(5.0,-2.95,6.0),
    "exhaust":(6.4,1.6,8.8)})
render(f"{OUT}/generator.png")

# ---------- 3. boiler ----------
reset(); m=std_mats()
jacket=mat("jacket","#D8D8D4",0.45,0.1)
shell=cylz("shell",0,0,0.8,6.2,2.3,jacket)
wcut(-1.6,-3.0,2.2,1.8,-0.9,5.2); ccut(shell)
for tx in (-1.0,-0.33,0.33,1.0):
    for ty in (-0.5,0.4):
        cylz(f"tube{tx}{ty}",tx,ty,1.4,5.6,0.14,m["copper"])
cylz("innershell",0,0,1.2,5.9,1.55,m["dark"])
cylz("band1",0,0,0.8,1.3,2.31,m["dark"])
cylz("band2",0,0,5.7,6.2,2.31,m["dark"])
box("skirt",-2.5,-2.5,0,2.5,2.5,0.8,m["dark"],0.03)
box("burner",-1.1,-3.6,1.6,1.1,-2.2,3.0,m["grey"],0.05)
cylz("flue",0,0,6.2,8.6,0.5,m["alu"])
cylx("gastrain",-4.8,-1.1,-2.9,2.2,0.2,m["copper"])
box("gv1",-3.9,-3.15,1.9,-3.3,-2.65,2.5,m["dark"],0.02)
box("gv2",-2.7,-3.15,1.9,-2.1,-2.65,2.5,m["teal"],0.02)
box("panel",2.35,-1.2,2.6,2.75,1.2,4.6,m["dark"],0.03)
cylx("hwout",2.3,5.2,0.8,5.2,0.28,m["alu"])
cylz("relief",3.4,0.8,5.2,6.4,0.14,m["copper"])
cylx("pumpshaft",3.6,5.4,-1.2,1.6,0.5,m["steel"])
cylz("pumpvol",5.4,-1.2,0.9,2.4,0.8,m["red"])
cam=cam_lights((0.5,0,3.4),21)
results["boiler"]=project(cam,{
    "burner":(0,-3.4,2.3),"exchanger":(0,-1.4,3.9),"gastrain":(-3.4,-2.9,2.2),
    "pump":(4.6,-1.4,1.7),"relief":(3.4,0.8,6.2),"controls":(2.7,-0.6,3.7),
    "flue":(0,0,7.8)})
render(f"{OUT}/boiler.png")

# ---------- 4. heat-pump ----------
reset(); m=std_mats()
box("cab",-3.2,-1.1,0.3,3.2,1.1,5.2,m["grey"])
box("feet1",-3.0,-1.15,0,-2.2,1.15,0.3,m["dark"],0.02)
box("feet2",2.2,-1.15,0,3.0,1.15,0.3,m["dark"],0.02)
cyly("fanr",-1.35,-1.1,-1.4,3.4,1.5,m["dark"])
cyly("fanhub",-1.45,-1.3,-1.4,3.4,0.3,m["grey2"])
box("fanguard",-3.05,-1.2,1.8,0.25,-1.1,5.0,m["louv"],0.02)
for i in range(6):
    box(f"lv{i}",3.15,-1.05,0.8+i*0.7,3.26,1.05,1.1+i*0.7,m["louv"],0.01)
cabo=bpy.data.objects["cab"]
wcut(0.6,-1.5,0.45,2.9,-0.3,2.0); ccut(cabo)
cylz("comp_int",1.75,-0.65,0.45,1.75,0.62,m["green"])
cylx("ctube1",1.0,2.5,-0.65,1.55,0.07,m["copper"])
cylz("lineset1",2.7,1.3,0.4,2.2,0.09,m["copper"])
cylz("lineset2",2.95,1.3,0.4,1.8,0.12,m["dark"])
box("ctrl",2.2,-1.18,3.8,2.9,-1.1,4.8,m["dark"],0.02)
cam=cam_lights((0,0,2.6),13)
results["heat-pump"]=project(cam,{
    "fan":(-1.4,-1.2,3.4),"coil":(3.2,0,2.6),"compressor":(1.75,-0.8,1.2),
    "lineset":(2.85,1.3,1.6),"controls":(2.55,-1.15,4.3),"defrost":(-2.6,-1.15,4.6)})
render(f"{OUT}/heat-pump.png")

# ---------- 5. air-handler ----------
reset(); m=std_mats()
box("body",-7.5,-2.2,0.5,7.5,2.2,5.0,m["grey"])
box("base",-7.5,-2.3,0,7.5,2.3,0.5,m["dark"],0.03)
for x in (-3.0,1.8):
    box(f"seam{x}",x,-2.26,0.7,x+0.12,2.26,4.8,m["grey2"],0.01)
wcut(-6.8,-2.9,1.0,1.2,-1.2,4.4)
ccut(bpy.data.objects["body"])
for i,fx in enumerate((-6.3,-5.5,-4.7)):
    box(f"filtslab{i}",fx,-2.1,1.1,fx+0.35,2.1,4.3,m["louv"],0.01)
box("coil_int",-1.8,-2.0,1.1,0.8,2.0,4.3,mat("fins","#5E7A82",0.6,0.3),0.02)
cyly("blowdrum",-1.4,1.4,2.6,2.6,1.25,m["steel"])
cylz("drain",-1.0,-2.5,0,0.8,0.12,m["copper"])
cyly("inlet",2.4,3.2,5.0,2.75,1.5,m["dark"])
box("motor",2.6,-2.9,0.8,4.6,-2.3,2.4,m["green"],0.04)
box("beltguard",4.0,-2.5,1.2,5.6,-2.26,3.6,m["louv"],0.02)
box("duct",6.9,-1.6,1.2,9.2,1.6,3.8,m["grey2"],0.03)
cam=cam_lights((0.5,0,2.6),22)
results["air-handler"]=project(cam,{
    "filters":(-5.5,-2.2,2.7),"coil":(-0.5,-2.1,2.7),"drainpan":(-1.0,-2.5,0.5),
    "blower":(2.8,-1.2,3.4),"motor":(3.6,-2.7,1.6),"dampers":(8.0,-1.6,2.5)})
render(f"{OUT}/air-handler.png")

# ---------- 6. cooling-tower ----------
reset(); m=std_mats()
box("basin",-2.6,-2.6,0,2.6,2.6,1.0,m["dark"],0.04)
galv=mat("galv","#C9CCCB",0.35,0.55)
box("body",-2.5,-2.5,1.0,2.5,2.5,4.6,galv)
for i in range(4):
    for f,fixed in (("y",-2.56),("x",2.56)):
        if f=="y": box(f"lvy{i}",-2.4,fixed,1.2+i*0.55,2.4,fixed+0.1,1.45+i*0.55,m["louv"],0.01)
        else: box(f"lvx{i}",fixed-0.1,-2.4,1.2+i*0.55,fixed,2.4,1.45+i*0.55,m["louv"],0.01)
bod=bpy.data.objects["body"]
wcut(0.2,-3.0,1.0,2.9,-0.2,4.6); ccut(bod)
for i in range(6):
    box(f"fill{i}",0.3,-2.3,1.6+i*0.42,2.4,-0.4,1.78+i*0.42,m["louv"],0.01)
box("water",0.3,-2.3,1.05,2.4,-0.4,1.35,mat("water","#3E6E7A",0.15,0.1),0.01)
cylx("spray",0.4,2.3,-1.2,4.35,0.12,m["dark"])
box("fandeck",-2.5,-2.5,4.6,2.5,2.5,5.0,galv,0.03)
cylz("fanring",0,0,5.0,5.9,1.9,m["grey2"])
cylz("fanblade",0,0,5.35,5.6,1.6,m["dark"])
cylz("fanhub",0,0,5.5,5.95,0.3,m["grey2"])
cylx("inpipe",2.5,4.6,1.4,3.6,0.3,m["dark"])
cylz("inpipedrop",4.6,1.4,0,3.6,0.3,m["dark"])
cam=cam_lights((0.3,0,2.8),15)
results["cooling-tower"]=project(cam,{
    "fan":(0,-0.6,5.7),"fill":(1.4,-1.4,2.8),"basin":(1.3,-1.4,1.2),
    "distribution":(1.8,-2.5,4.3),"louvers":(-2.56,-1.2,1.9),"pipes":(3.6,1.4,2.4)})
render(f"{OUT}/cooling-tower.png")

# ---------- 7. compressor ----------
reset(); m=std_mats()
box("feet",-2.8,-1.2,0,2.8,1.2,0.4,m["dark"],0.03)
cylx("body",-2.6,1.6,0,1.5,1.05,m["green"])
cylx("motor",1.6,3.0,0,1.5,1.2,m["green"])
bod=bpy.data.objects["body"]
wcut(-2.0,-1.6,0.6,0.4,-0.4,1.9); ccut(bod)
cylx("windings",-1.8,0.2,0,1.5,0.72,m["copper"])
cylx("crank",-2.2,1.4,0,1.5,0.28,m["dark"])
box("valveplate",-2.2,-0.75,2.35,1.2,0.75,2.9,m["dark"],0.04)
box("terminal",2.2,-1.35,1.4,2.9,-0.75,2.2,m["dark"],0.03)
cylz("suction",-1.8,0,2.9,4.1,0.32,m["steel"])
cylz("discharge",0.6,0,2.9,3.8,0.26,m["copper"])
cylz("sightglass",-0.6,-1.06,1.0,1.35,0.14,m["alu"])
cam=cam_lights((0,0,1.8),11)
results["compressor"]=project(cam,{
    "motor":(-0.8,-1.0,1.5),"valves":(-0.5,-0.75,2.6),"oil":(-0.6,-1.05,0.9),
    "terminals":(2.55,-1.3,1.8),"suction":(-1.8,0,3.8),"discharge":(0.6,0,3.5)})
render(f"{OUT}/compressor.png")

# ---------- 8. electrical-panel ----------
reset(); m=std_mats()
box("cab1",-2.4,-0.5,0,-0.1,0.5,4.4,m["grey"])
box("door1",-2.3,-0.56,0.2,-0.2,-0.5,4.2,m["grey2"],0.02)
box("handle1",-0.55,-0.62,2.0,-0.4,-0.56,2.6,m["dark"],0.01)
cyly("meter",-0.62,-0.5,-1.7,3.4,0.35,m["dark"])
box("cab2",0.1,-0.5,0,2.4,0.5,4.4,m["grey"])
for r in range(6):
    for c in range(2):
        box(f"br{r}{c}",0.5+c*1.0,-0.56,0.7+r*0.55,1.2+c*1.0,-0.5,0.95+r*0.55,m["dark"],0.01)
box("main",0.5,-0.58,4.0-0.55,2.2,-0.5,4.0,m["red"],0.02)
for x in (-1.8,-1.0,0.6,1.4,2.0):
    cylz(f"cond{x}",x,0,4.4,5.6,0.14,m["steel"])
cam=cam_lights((0,0,2.4),10.5)
results["electrical-panel"]=project(cam,{
    "main":(1.35,-0.55,3.7),"branch":(0.9,-0.55,1.8),"meter":(-1.7,-0.6,3.4),
    "lugs":(-1.25,-0.55,4.15),"conduit":(0.6,0,5.2),"door":(-1.9,-0.55,2.2)})
render(f"{OUT}/electrical-panel.png")

# ---------- 9. controls ----------
reset(); m=std_mats()
box("wall",-2.6,0.55,0,2.6,0.85,4.6,mat("wallb","#E8E6DF",0.8),0.02)
box("enc",-1.7,0.1,0.8,1.7,0.55,4.0,m["grey"])
box("dooropen",1.7,-1.4,0.8,1.8,0.55,4.0,m["grey2"],0.02)
for r in range(3):
    box(f"rail{r}",-1.5,0.04,1.3+r*0.8,1.5,0.1,1.42+r*0.8,m["steel"],0.01)
    for c in range(5):
        box(f"mod{r}{c}",-1.4+c*0.6,0.0,1.15+r*0.8,-1.0+c*0.6,0.06,1.62+r*0.8,
            m["teal"] if (r+c)%3==0 else m["dark"],0.01)
box("screen",0.4,0.02,3.3,1.4,0.08,3.8,m["teal"],0.01)
for x in (-1.2,-0.4,0.6):
    cylz(f"cond{x}",x,0.3,4.0,5.2,0.1,m["steel"])
cam=cam_lights((0,0,2.6),9.5)
results["controls"]=project(cam,{
    "controller":(0.9,0.02,3.55),"modules":(-0.2,0.0,2.0),"transformers":(-1.2,0.0,1.35),
    "wiring":(-1.2,0.3,4.6),"sensors":(1.75,-1.0,2.4)})
render(f"{OUT}/controls.png")

# ---------- 10. pump ----------
reset(); m=std_mats()
box("baseplate",-2.6,-1.0,0,2.6,1.0,0.35,m["dark"],0.03)
cylx("motor",0.4,2.5,0,1.05,0.75,m["green"])
box("jbox",1.2,-0.95,1.5,1.9,-0.55,1.95,m["dark"],0.02)
box("guard",-0.35,-0.55,0.5,0.4,0.55,1.5,m["louv"],0.02)
cylx("shaft",-0.8,-0.3,0,1.05,0.3,m["steel"])
vol=cylz("volute",-1.5,0,0.35,2.0,0.9,m["red"])
wcut(-2.3,-1.2,0.6,-1.1,-0.3,1.75); ccut(vol)
cylz("impeller",-1.5,0,0.8,1.55,0.55,m["steel"])
for a in range(4):
    ang=a*3.14159/2
    box(f"vane{a}",-1.5+0.1*a-0.25,-0.08,0.85,-1.5+0.1*a+0.25,0.08,1.5,m["steel"],0.01)
cylz("discharge",-1.5,0,2.0,3.4,0.35,m["red"])
cylx("suction",-2.9,-1.5,0,1.05,0.4,m["red"])
cyly("gauge",-0.6,-0.4,-1.5,2.7,0.18,m["alu"])
cam=cam_lights((0,0,1.6),9)
results["pump"]=project(cam,{
    "motor":(1.5,-1.0,1.1),"coupling":(0.0,-0.55,1.0),"seal":(-0.9,-0.7,1.4),
    "impeller":(-1.6,-0.8,1.2),"suction":(-2.6,-0.4,1.05),"gauge":(-0.5,-1.5,2.7)})
render(f"{OUT}/pump.png")

# ---------- 11. gas-heater ----------
reset(); m=std_mats()
box("body",-1.8,-1.1,1.2,1.8,1.1,3.2,m["grey"])
for i in range(5):
    box(f"lv{i}",-1.7,-1.16,1.4+i*0.32,1.7,-1.1,1.6+i*0.32,m["louv"],0.01)
bod=bpy.data.objects["body"]
wcut(-1.2,-1.4,1.5,1.0,-0.6,2.9); ccut(bod)
for i in range(4):
    cylx(f"btube{i}",-1.0,0.8,-0.85,1.75+i*0.3,0.11,m["copper"])
cyly("fanring",1.1,1.7,0,2.2,0.85,m["dark"])
cylz("flue",0.9,0,3.2,5.2,0.24,m["alu"])
box("gasvalve",-1.2,-1.3,0.5,-0.5,-0.8,1.1,m["dark"],0.02)
cylx("gasline",-3.2,-0.85,-1.05,0.8,0.09,m["copper"])
for x in (-1.4,1.4):
    cylz(f"rod{x}",x,0,3.2,4.6,0.05,m["dark"])
cam=cam_lights((0,0,2.4),11)
results["gas-heater"]=project(cam,{
    "burner":(-0.2,-0.9,1.9),"exchanger":(0,-0.9,2.6),"fan":(1.5,0,2.2),
    "gasvalve":(-0.85,-1.2,0.85),"flue":(0.9,0,4.6),"thermostat":(-1.75,-1.1,2.9)})
render(f"{OUT}/gas-heater.png")

# ---------- 12. transfer-switch ----------
reset(); m=std_mats()
box("cab",-1.3,-0.7,0,1.3,0.7,4.6,m["grey"])
door=box("door",-1.2,-0.76,0.15,1.2,-0.7,4.45,m["grey2"],0.02)
wcut(-0.9,-0.9,1.2,0.9,-0.6,3.2); ccut(door)
box("mech1",-0.7,-0.55,1.5,-0.1,-0.25,2.9,m["dark"],0.02)
box("mech2",0.1,-0.55,1.5,0.7,-0.25,2.9,m["dark"],0.02)
for bx in (-0.55,-0.25,0.15,0.45):
    box(f"bus{bx}",bx,-0.62,1.35,bx+0.09,-0.55,3.05,m["copper"],0.01)
box("screen",-0.7,-0.82,3.4,0.7,-0.76,4.1,m["teal"],0.01)
box("handle",1.0,-0.84,2.2,1.14,-0.76,2.9,m["dark"],0.01)
for i in range(4):
    box(f"lv{i}",-0.9,-0.78,0.5+i*0.28,0.9,-0.74,0.66+i*0.28,m["louv"],0.01)
cylz("cond1",-0.7,0,4.6,5.9,0.18,m["steel"])
cylz("cond2",0.7,0,4.6,5.9,0.18,m["steel"])
box("lugbox",-1.42,-0.4,1.4,-1.3,0.4,2.4,m["dark"],0.02)
cam=cam_lights((0,0,2.6),9.5)
results["transfer-switch"]=project(cam,{
    "mechanism":(-0.4,-0.6,2.2),"controller":(0,-0.8,3.75),"lugs":(-1.4,-0.4,1.9),
    "conduit":(-0.7,0,5.4),"vents":(0,-0.76,0.9)})
render(f"{OUT}/transfer-switch.png")


# ---------- 13. envelope (roof membrane cutaway corner) ----------
reset(); m=std_mats()
conc=mat("deckc","#B9BDBF",0.75)
memb=mat("memb","#D5D6D2",0.6)
insul=mat("insul","#D9C48A",0.7)
vap=mat("vap","#2C2C2A",0.5)
cover=mat("cover","#C8C4B6",0.65)
flash=mat("flash","#4A4E52",0.35,0.5)
clad=mat("clad","#AEB3B6",0.5,0.2)
# stepped layer reveal (front to back): deck, vapour barrier, insulation, cover board, membrane
box("deck",0,0,0,8,8,0.5,conc,0.02)
box("vapb",0,0.9,0.5,8,8,0.58,vap,0.01)
box("insu",0,1.8,0.58,8,8,1.05,insul,0.02)
box("covb",0,2.7,1.05,8,8,1.17,cover,0.01)
box("memb",0,3.6,1.17,8,8,1.28,memb,0.01)
# membrane runs up parapet
box("parapet",0,7.4,1.28,8,8,2.6,conc,0.02)
box("membup",0,7.32,1.28,8,7.4,2.35,memb,0.01)
box("cap",-0.05,7.25,2.6,8.05,8.05,2.82,flash,0.02)
# side parapet
box("parapet2",7.4,0,1.28,8,7.4,2.6,conc,0.02)
box("cap2",7.35,-0.05,2.6,8.05,7.4,2.82,flash,0.02)
# roof drain
cylz("drainbase",2.2,5.6,1.28,1.42,0.5,flash)
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.34, location=(2.2,5.6,1.5))
dome=bpy.context.object; dome.scale=(1,1,0.65); dome.data.materials.append(flash)
# sealant joint on cladding face below deck front
box("cladpanelA",0,-0.12,-1.6,3.8,0,0,clad,0.02)
box("cladpanelB",4.2,-0.12,-1.6,8,0,0,clad,0.02)
box("sealant",3.8,-0.1,-1.6,4.2,-0.02,0,m["dark"],0.01)
# roof anchor
cylz("anchorpost",5.6,4.4,1.28,2.0,0.12,flash)
bpy.ops.mesh.primitive_torus_add(major_radius=0.22, minor_radius=0.05, location=(5.6,4.4,2.15))
ring=bpy.context.object; ring.rotation_euler=(math.radians(90),0,0); ring.data.materials.append(flash)
cam=cam_lights((4,3.5,0.8),15)
results["envelope"]=project(cam,{
    "membrane":(1.6,5.0,1.3),
    "insulation":(1.2,2.2,0.9),
    "flashing":(3.0,7.7,2.75),
    "drain":(2.2,5.6,1.7),
    "sealant":(4.0,-0.1,-0.8),
    "anchor":(5.6,4.4,2.1)})
render(f"{OUT}/envelope.png")

print("EQUIP_HOTSPOTS_JSON=" + json.dumps(results))

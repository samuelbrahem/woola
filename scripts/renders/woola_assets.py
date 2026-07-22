"""Detailed equipment assemblies + CC0 imports for Woola building renders."""
import bpy, math

def _snap():
    return set(bpy.data.objects)

def _new(before):
    return [o for o in bpy.data.objects if o not in before]

def mount(objs, loc, s=1.0, rz=0.0):
    bpy.ops.object.empty_add(location=(0, 0, 0))
    e = bpy.context.object
    for o in objs:
        if o.parent is None:
            o.parent = e
    e.scale = (s, s, s)
    e.rotation_euler = (0, 0, rz)
    e.location = loc
    return e

def make_lib(box, cylv, cylh, mat):
    """Returns asset builders bound to the scene helpers of the calling script."""

    grey = lambda: mat("eq_cab", "#DCD8CE", 0.5)
    grey2 = lambda: mat("eq_cab2", "#CFCABF", 0.55)
    dark = lambda: mat("eq_dark", "#3A3A38", 0.5)
    teal = lambda: mat("eq_teal", "#00788C", 0.45)
    louv = lambda: mat("eq_louv", "#B9B3A4", 0.6)
    alu = lambda: mat("eq_alu", "#B9B3A4", 0.35, 0.4)
    green = lambda: mat("eq_green", "#28322F", 0.45)

    def rtu(loc, s=0.28, rz=0.0):
        b = _snap()
        box("r_curb", -9, -3.6, 0, 9, 3.6, 0.9, dark())
        box("r_cab", -9, -3.5, 0.9, 9, 3.5, 5.6, grey())
        for x in (-4.5, 0.2, 4.8):
            box(f"r_seam{x}", x, -3.56, 1.1, x + 0.12, 3.56, 5.4, grey2())
        for i in range(7):
            box(f"r_lv{i}", -8.85, -3.62, 1.4 + i * 0.55, -4.9, 3.62, 1.62 + i * 0.55, louv())
        cylv("r_fan1", -7.2, -1.6, 5.6, 5.9, 1.35, dark())
        cylv("r_fan2", -7.2, 1.6, 5.6, 5.9, 1.35, dark())
        cylv("r_hub1", -7.2, -1.6, 5.9, 6.15, 0.28, grey2())
        cylv("r_hub2", -7.2, 1.6, 5.9, 6.15, 0.28, grey2())
        box("r_hood", 4.2, -3.95, 3.4, 7.6, -3.45, 5.3, grey2())
        box("r_ctrl", 7.4, -3.68, 1.5, 8.6, -3.5, 3.2, dark())
        box("r_disc", 6.6, -3.66, 1.7, 7.2, -3.52, 2.5, teal())
        box("r_filt", 0.4, -3.58, 1.5, 3.6, -3.5, 4.9, grey2())
        return mount(_new(b), loc, s, rz)

    def genset(loc, s=0.32, rz=0.0):
        b = _snap()
        box("g_tank", -10, -2.8, 0, 10, 2.8, 2.2, dark())
        box("g_eng", -2.5, -2.2, 2.5, 4.5, 2.2, 6.4, green())
        box("g_vc", -1.8, -1.2, 6.4, 3.8, 1.2, 7.0, dark())
        cylh("g_alt", "x", 4.6, 9.0, 0, 4.4, 1.9, alu())
        box("g_rad", -6.8, -2.3, 2.5, -4.6, 2.3, 6.8, grey())
        box("g_grille", -6.95, -1.9, 3.0, -6.8, 1.9, 6.3, dark())
        cylh("g_sil", "x", -2.1, 3.3, 0.9, 7.9, 0.75, alu())
        box("g_ctrl", 8.7, -2.4, 2.5, 10.6, 2.4, 7.2, grey())
        box("g_scr", 10.55, -1.2, 5.0, 10.75, 1.2, 6.4, teal())
        box("g_batt", -8.6, -2.2, 2.5, -7.2, -0.6, 3.6, dark())
        return mount(_new(b), loc, s, rz)

    def ev_charger(loc, s=1.0, rz=0.0):
        b = _snap()
        box("e_base", -0.35, -0.22, 0, 0.35, 0.22, 0.12, dark())
        box("e_body", -0.28, -0.16, 0.12, 0.28, 0.16, 1.45, grey())
        box("e_face", -0.29, -0.17, 0.7, 0.29, -0.145, 1.35, teal())
        box("e_scr", -0.18, -0.175, 0.95, 0.18, -0.16, 1.25, dark())
        cylh("e_cable", "x", -0.5, -0.28, 0.12, 0.9, 0.045, dark())
        cylv("e_plug", -0.5, 0.12, 0.55, 0.9, 0.06, dark())
        return mount(_new(b), loc, s, rz)

    def gas_heater(loc, s=1.0, rz=0.0):
        b = _snap()
        box("h_body", -0.9, -0.55, 0, 0.9, 0.55, 1.0, grey())
        for i in range(4):
            box(f"h_lv{i}", -0.85, -0.6, 0.12 + i * 0.2, 0.85, -0.55, 0.24 + i * 0.2, louv())
        cylh("h_fan", "y", 0.55, 0.85, 0, 0.5, 0.42, dark())
        cylv("h_flue", 0.45, 0, 1.0, 1.9, 0.12, alu())
        for x in (-0.7, 0.7):
            cylv(f"h_rod{x}", x, 0, 1.0, 1.6, 0.03, dark())
        return mount(_new(b), loc, s, rz)

    def boiler(loc, s=1.0, rz=0.0):
        b = _snap()
        jacket = lambda: mat("eq_jacket", "#D8D8D4", 0.45, 0.1)
        cylv("b_shell", 0, 0, 0.25, 2.6, 0.95, jacket())
        cylv("b_band", 0, 0, 0.25, 0.55, 0.96, dark())
        box("b_door", -0.35, -1.0, 0.6, 0.35, -0.9, 1.6, dark())
        cylv("b_stub", 0, 0, 2.6, 3.1, 0.16, alu())
        cylh("b_pipe", "x", 0, 1.4, 0, 3.05, 0.16, alu())
        cylv("b_drop", 1.4, 0, 1.6, 3.05, 0.16, alu())
        for a in (0.5, -0.5):
            box(f"b_leg{a}", a - 0.08, -0.08, 0, a + 0.08, 0.08, 0.28, dark())
        return mount(_new(b), loc, s, rz)

    def import_gltf(path, loc, s=1.0, rz=0.0):
        b = _snap()
        bpy.ops.import_scene.gltf(filepath=path)
        return mount(_new(b), loc, s, rz)

    return dict(rtu=rtu, genset=genset, ev_charger=ev_charger, gas_heater=gas_heater, boiler=boiler, import_gltf=import_gltf)

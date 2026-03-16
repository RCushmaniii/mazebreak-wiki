"""
MazeBreak - Zombie Enemy Blockout
Run in Blender: File > Scripting tab > Open > Run Script
Or CLI: blender --background --python zombie_blockout.py

Generates a low-poly zombie blockout mesh (~800-1000 tris)
with basic material colors. Ready for refinement and rigging.
"""

import bpy
import bmesh
from mathutils import Vector
import math

# ---------------------
# CLEANUP SCENE
# ---------------------
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Remove orphan data
for block in bpy.data.meshes:
    if block.users == 0:
        bpy.data.meshes.remove(block)
for block in bpy.data.materials:
    if block.users == 0:
        bpy.data.materials.remove(block)


# ---------------------
# MATERIALS
# ---------------------
def create_material(name, r, g, b):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (r, g, b, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.85
    return mat

# Muted, atmospheric colors matching MazeBreak art direction
mat_skin = create_material("Zombie_Skin", 0.35, 0.42, 0.30)       # Muted green-gray
mat_skin_dark = create_material("Zombie_SkinDark", 0.25, 0.30, 0.22)  # Darker decay
mat_cloth = create_material("Zombie_Cloth", 0.18, 0.14, 0.10)     # Torn dark brown
mat_bone = create_material("Zombie_Bone", 0.72, 0.68, 0.58)       # Exposed bone
mat_eyes = create_material("Zombie_Eyes", 0.6, 0.75, 0.2)         # Sickly yellow-green glow

# Make eyes emissive
eye_mat_nodes = mat_eyes.node_tree.nodes
eye_bsdf = eye_mat_nodes["Principled BSDF"]
eye_bsdf.inputs["Emission Color"].default_value = (0.6, 0.75, 0.2, 1.0)
eye_bsdf.inputs["Emission Strength"].default_value = 2.0


# ---------------------
# HELPER FUNCTIONS
# ---------------------
def set_origin_to_bottom(obj):
    """Move origin to bottom of mesh so character stands on ground plane."""
    bpy.context.view_layer.objects.active = obj
    bbox = obj.bound_box
    min_z = min([v[2] for v in bbox])
    offset = Vector((0, 0, -min_z))
    obj.data.transform(lambda v: None)  # no-op placeholder
    # Manual offset via edit mode
    bm = bmesh.new()
    bm.from_mesh(obj.data)
    for v in bm.verts:
        v.co.z -= min_z
    bm.to_mesh(obj.data)
    bm.free()
    obj.location.z = 0


def create_cube_part(name, location, scale, material, rotation=(0, 0, 0)):
    """Create a beveled cube body part with material."""
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = scale
    obj.rotation_euler = [math.radians(r) for r in rotation]

    # Apply transforms
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)

    # Slight bevel for softer low-poly look
    bpy.ops.object.modifier_add(type='BEVEL')
    obj.modifiers["Bevel"].width = 0.02
    obj.modifiers["Bevel"].segments = 1
    bpy.ops.object.modifier_apply(modifier="Bevel")

    # Assign material
    obj.data.materials.append(material)

    return obj


# ---------------------
# BUILD THE ZOMBIE
# ---------------------
parts = []

# === TORSO (hunched) ===
# Main torso - slightly hunched forward
torso = create_cube_part(
    "Torso",
    location=(0, 0.05, 1.05),
    scale=(0.45, 0.25, 0.55),
    material=mat_cloth,
    rotation=(8, 0, 0)  # Slight forward hunch
)
parts.append(torso)

# === HEAD ===
# Tilted slightly, jaw hanging
head = create_cube_part(
    "Head",
    location=(0, 0.1, 1.55),
    scale=(0.28, 0.28, 0.30),
    material=mat_skin,
    rotation=(5, 0, -5)  # Slight tilt for asymmetry
)
parts.append(head)

# Hanging jaw (separate piece for character)
jaw = create_cube_part(
    "Jaw",
    location=(0, 0.18, 1.40),
    scale=(0.18, 0.10, 0.08),
    material=mat_skin_dark,
    rotation=(15, 0, 0)  # Hanging open
)
parts.append(jaw)

# Eyes (small glowing cubes)
for side, x_offset in [("L", -0.08), ("R", 0.08)]:
    eye = create_cube_part(
        f"Eye_{side}",
        location=(x_offset, 0.22, 1.58),
        scale=(0.06, 0.04, 0.05),
        material=mat_eyes
    )
    parts.append(eye)

# === SHOULDERS & ARMS ===
# Left arm (reaching forward) - the grabbing arm
upper_arm_L = create_cube_part(
    "UpperArm_L",
    location=(-0.38, 0.15, 1.15),
    scale=(0.14, 0.14, 0.30),
    material=mat_skin,
    rotation=(45, 0, 10)  # Reaching forward
)
parts.append(upper_arm_L)

forearm_L = create_cube_part(
    "Forearm_L",
    location=(-0.42, 0.35, 0.92),
    scale=(0.11, 0.11, 0.28),
    material=mat_bone,  # Exposed bone on forearm
    rotation=(20, 0, 5)
)
parts.append(forearm_L)

hand_L = create_cube_part(
    "Hand_L",
    location=(-0.44, 0.42, 0.72),
    scale=(0.12, 0.08, 0.12),
    material=mat_skin_dark,
    rotation=(10, 0, 0)
)
parts.append(hand_L)

# Right arm (hanging lower) - the drooping arm (dropped shoulder)
upper_arm_R = create_cube_part(
    "UpperArm_R",
    location=(0.38, 0.0, 1.05),
    scale=(0.14, 0.14, 0.32),
    material=mat_skin,
    rotation=(5, 0, -15)  # Hanging more
)
parts.append(upper_arm_R)

forearm_R = create_cube_part(
    "Forearm_R",
    location=(0.42, 0.02, 0.72),
    scale=(0.11, 0.11, 0.26),
    material=mat_skin,
    rotation=(0, 0, -8)
)
parts.append(forearm_R)

hand_R = create_cube_part(
    "Hand_R",
    location=(0.44, 0.04, 0.52),
    scale=(0.13, 0.09, 0.13),
    material=mat_skin_dark
)
parts.append(hand_R)

# === HIPS / PELVIS ===
hips = create_cube_part(
    "Hips",
    location=(0, 0, 0.65),
    scale=(0.40, 0.22, 0.20),
    material=mat_cloth
)
parts.append(hips)

# === LEGS ===
# Left leg (weight-bearing, slightly bent)
upper_leg_L = create_cube_part(
    "UpperLeg_L",
    location=(-0.14, 0.0, 0.42),
    scale=(0.16, 0.16, 0.30),
    material=mat_cloth,
    rotation=(-3, 0, 0)
)
parts.append(upper_leg_L)

lower_leg_L = create_cube_part(
    "LowerLeg_L",
    location=(-0.14, -0.02, 0.14),
    scale=(0.13, 0.13, 0.26),
    material=mat_skin_dark,
    rotation=(3, 0, 0)
)
parts.append(lower_leg_L)

# Right leg (dragging leg - the limp)
upper_leg_R = create_cube_part(
    "UpperLeg_R",
    location=(0.14, -0.06, 0.42),
    scale=(0.16, 0.16, 0.30),
    material=mat_cloth,
    rotation=(10, 0, 0)  # Slightly back - dragging
)
parts.append(upper_leg_R)

lower_leg_R = create_cube_part(
    "LowerLeg_R",
    location=(0.14, -0.12, 0.14),
    scale=(0.13, 0.13, 0.26),
    material=mat_skin_dark,
    rotation=(8, 0, 5)  # Angled out - limp
)
parts.append(lower_leg_R)

# Feet (simple blocks)
foot_L = create_cube_part(
    "Foot_L",
    location=(-0.14, 0.04, 0.02),
    scale=(0.14, 0.20, 0.06),
    material=mat_skin_dark
)
parts.append(foot_L)

foot_R = create_cube_part(
    "Foot_R",
    location=(0.14, -0.10, 0.02),
    scale=(0.14, 0.20, 0.06),
    material=mat_skin_dark,
    rotation=(0, 0, 8)  # Slightly turned out - dragging
)
parts.append(foot_R)


# ---------------------
# JOIN ALL PARTS
# ---------------------
bpy.ops.object.select_all(action='DESELECT')
for part in parts:
    part.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()

# Rename final object
zombie = bpy.context.active_object
zombie.name = "Zombie_EN001"

# ---------------------
# SET ORIGIN TO FEET
# ---------------------
bm = bmesh.new()
bm.from_mesh(zombie.data)
min_z = min(v.co.z for v in bm.verts)
for v in bm.verts:
    v.co.z -= min_z
bm.to_mesh(zombie.data)
bm.free()
zombie.location = (0, 0, 0)

# ---------------------
# ADD A GROUND PLANE FOR REFERENCE
# ---------------------
bpy.ops.mesh.primitive_plane_add(size=4, location=(0, 0, 0))
ground = bpy.context.active_object
ground.name = "Ground_Reference"
ground_mat = create_material("Ground", 0.15, 0.15, 0.15)
ground.data.materials.append(ground_mat)

# ---------------------
# CAMERA & LIGHTING SETUP FOR PREVIEW
# ---------------------
# Camera - side view (how players will see it in-game)
bpy.ops.object.camera_add(location=(3.0, -0.5, 0.8), rotation=(math.radians(82), 0, math.radians(90)))
cam = bpy.context.active_object
cam.name = "SideView_Camera"
bpy.context.scene.camera = cam

# Three-quarter view camera
bpy.ops.object.camera_add(location=(2.5, -2.0, 1.2), rotation=(math.radians(72), 0, math.radians(52)))
cam2 = bpy.context.active_object
cam2.name = "ThreeQuarter_Camera"

# Key light (warm, slightly above)
bpy.ops.object.light_add(type='SUN', location=(2, -2, 4))
sun = bpy.context.active_object
sun.name = "Key_Light"
sun.data.energy = 3.0
sun.data.color = (1.0, 0.9, 0.8)  # Warm torchlight feel
sun.rotation_euler = (math.radians(45), math.radians(15), math.radians(-30))

# Fill light (cool, dim)
bpy.ops.object.light_add(type='SUN', location=(-2, 2, 3))
fill = bpy.context.active_object
fill.name = "Fill_Light"
fill.data.energy = 0.8
fill.data.color = (0.7, 0.8, 1.0)  # Cool dungeon ambient

# ---------------------
# RENDER SETTINGS
# ---------------------
bpy.context.scene.render.engine = 'EEVEE'
bpy.context.scene.render.resolution_x = 1024
bpy.context.scene.render.resolution_y = 1024
bpy.context.scene.render.film_transparent = True  # Transparent background

# ---------------------
# PRINT STATS
# ---------------------
bpy.ops.object.select_all(action='DESELECT')
zombie_obj = bpy.data.objects.get("Zombie_EN001")
if zombie_obj:
    zombie_obj.select_set(True)
    bpy.context.view_layer.objects.active = zombie_obj
    tri_count = sum(len(f.vertices) - 2 for f in zombie_obj.data.polygons)
    vert_count = len(zombie_obj.data.vertices)
    print(f"\n{'='*40}")
    print(f"  ZOMBIE EN-001 BUILD COMPLETE")
    print(f"  Vertices: {vert_count}")
    print(f"  Triangles: ~{tri_count}")
    print(f"  Materials: {len(zombie_obj.data.materials)}")
    print(f"{'='*40}")
    print(f"\nNEXT STEPS:")
    print(f"  1. Review silhouette from side camera")
    print(f"  2. Adjust proportions to taste")
    print(f"  3. Add edge loops for animation deformation")
    print(f"  4. Rig with simple armature (8-12 bones)")
    print(f"  5. Export as .fbx for Roblox")
    print(f"\nSWITCH CAMERAS:")
    print(f"  - 'SideView_Camera' = how players see it")
    print(f"  - 'ThreeQuarter_Camera' = detail review angle")

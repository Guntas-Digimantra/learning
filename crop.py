from PIL import Image

diff = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_diff.png')
diff_cropped = diff.crop((0, 0, 1440, 500))
diff_cropped.save('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_diff_top.png')

ref = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_ref.png')
ref_cropped = ref.crop((0, 0, 1440, 500))
ref_cropped.save('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_ref_top.png')

v2 = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_v2.png')
v2_cropped = v2.crop((0, 0, 1440, 500))
v2_cropped.save('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_v2_top.png')

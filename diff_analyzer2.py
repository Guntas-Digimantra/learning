from PIL import Image
import numpy as np

ref = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_ref2.png').convert('RGB')
v2 = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_v22.png').convert('RGB')

ref_arr = np.array(ref)
v2_arr = np.array(v2)

# Count total differ pixels per row
diff = np.abs(ref_arr.astype(int) - v2_arr.astype(int))
row_diffs = np.sum(diff, axis=(1,2))
significant_diffs = np.where(row_diffs > 1000)[0]

ranges = []
if len(significant_diffs) > 0:
    start = significant_diffs[0]
    last = start
    for y in significant_diffs[1:]:
        if y > last + 5:
            ranges.append((start, last))
            start = y
        last = y
    ranges.append((start, last))

print("Significant difference ranges (Y-coords):")
for r in ranges:
    print(f"{r[0]} - {r[1]} (length: {r[1]-r[0]})")

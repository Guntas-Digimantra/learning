from PIL import Image
import numpy as np

ref = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_ref.png').convert('RGB')
v2 = Image.open('/home/dml-guntas/.gemini/antigravity/brain/0a6a718c-b57a-4b32-ba1e-f7618fc706b4/home_v2.png').convert('RGB')

ref_arr = np.array(ref)
v2_arr = np.array(v2)

# Find first row where images differ
diff = np.abs(ref_arr.astype(int) - v2_arr.astype(int))
row_diffs = np.sum(diff, axis=(1,2))
diff_rows = np.where(row_diffs > 0)[0]

if len(diff_rows) > 0:
    print(f"First difference at Y = {diff_rows[0]}")
else:
    print("No difference found")

# Find ranges of rows with big differences
threshold = 1000 # Ignore tiny differences
significant_diffs = np.where(row_diffs > threshold)[0]

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


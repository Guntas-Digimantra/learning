#!/usr/bin/env python3
"""
Analyze section diff images from the visual-parity comparison.
Creates side-by-side comparison strips for review.
"""
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os, sys

SECTIONS_DIR = '/home/dml-guntas/dml/visual-parity/output/sections'
OUT_DIR = '/home/dml-guntas/dml/section-comparisons'
os.makedirs(OUT_DIR, exist_ok=True)

DIFF_IMAGES = {
    'part-time':     'part-time-diff.png',
    'courses':       'courses-diff.png',
    'portfolio':     'portfolio-diff.png',
    'discover-offer':'discover-offer-diff.png',
    'features':      'features-diff.png',
    'testimonial':   'testimonial-diff.png',
    'contact':       'contact-diff.png',
    'faq':           None,  # no separate diff image
}

REF_IMAGES = {
    'courses': 'courses-ref.png',
}
V2_IMAGES = {
    'courses': 'courses-v2.png',
}

def analyze_diff_image(name, path):
    if not path or not os.path.exists(path):
        print(f"  {name}: image not found at {path}")
        return
    
    img = Image.open(path).convert('RGB')
    arr = np.array(img)
    
    # Count red/pink pixels (diff highlights)
    red_mask = (arr[:,:,0] > 150) & (arr[:,:,1] < 100) & (arr[:,:,2] < 100)
    red_count = red_mask.sum()
    total = arr.shape[0] * arr.shape[1]
    
    print(f"  {name}: {img.size[0]}x{img.size[1]}, diff pixels: {red_count} ({red_count/total*100:.2f}%)")
    
    # Find rows with most differences
    row_reds = red_mask.sum(axis=1)
    hot_rows = np.where(row_reds > img.size[0] * 0.1)[0]
    if len(hot_rows) > 0:
        print(f"    Heavy diff rows: {hot_rows[0]}-{hot_rows[-1]} ({len(hot_rows)} rows)")

def create_sidebyside(name, ref_path, v2_path, out_path, max_height=600):
    """Create a side-by-side comparison image."""
    if not (os.path.exists(ref_path) and os.path.exists(v2_path)):
        return
    
    ref = Image.open(ref_path).convert('RGB')
    v2 = Image.open(v2_path).convert('RGB')
    
    # Crop to max_height
    ref_crop = ref.crop((0, 0, ref.width, min(ref.height, max_height)))
    v2_crop = v2.crop((0, 0, v2.width, min(v2.height, max_height)))
    
    # Create combined image
    w = ref_crop.width + v2_crop.width + 10
    h = max(ref_crop.height, v2_crop.height) + 30
    combined = Image.new('RGB', (w, h), (200, 200, 200))
    combined.paste(ref_crop, (0, 30))
    combined.paste(v2_crop, (ref_crop.width + 10, 30))
    
    draw = ImageDraw.Draw(combined)
    draw.text((10, 5), f"REFERENCE ({ref.width}x{ref.height})", fill=(0, 100, 0))
    draw.text((ref_crop.width + 20, 5), f"V2 ({v2.width}x{v2.height})", fill=(0, 0, 200))
    
    combined.save(out_path)
    print(f"  Saved: {out_path}")

print("=== Analyzing diff images ===")
for name, diff_file in DIFF_IMAGES.items():
    if diff_file:
        path = os.path.join(SECTIONS_DIR, diff_file)
        analyze_diff_image(name, path)

print()
print("=== Creating side-by-side comparisons ===")

# Courses comparison (we have both ref and v2)
courses_ref = os.path.join(SECTIONS_DIR, 'courses-ref.png')
courses_v2 = os.path.join(SECTIONS_DIR, 'courses-v2.png')
if os.path.exists(courses_ref) and os.path.exists(courses_v2):
    create_sidebyside('courses', courses_ref, courses_v2, f'{OUT_DIR}/courses-comparison.png')

# Also generate side-by-side for homepage overall diff
home_ref = '/home/dml-guntas/dml/visual-parity/output/home/laptop/reference.png'
home_v2 = '/home/dml-guntas/dml/visual-parity/output/home/laptop/v2.png'
home_diff = '/home/dml-guntas/dml/visual-parity/output/home/laptop/diff.png'

if os.path.exists(home_ref):
    ref_img = Image.open(home_ref)
    v2_img = Image.open(home_v2)
    diff_img = Image.open(home_diff)
    print(f"\nHome page: ref={ref_img.size}, v2={v2_img.size}")
    
    # Analyze which sections have most diffs by height
    diff_arr = np.array(diff_img.convert('RGB'))
    red_mask = (diff_arr[:,:,0] > 150) & (diff_arr[:,:,1] < 100) & (diff_arr[:,:,2] < 100)
    row_reds = red_mask.sum(axis=1)
    
    print("\nTop diff regions by Y position:")
    # Find contiguous ranges
    hot_rows = np.where(row_reds > ref_img.width * 0.02)[0]
    if len(hot_rows) > 0:
        ranges = []
        start = hot_rows[0]
        last = start
        for y in hot_rows[1:]:
            if y > last + 20:
                ranges.append((start, last, max(row_reds[start:last+1])))
                start = y
            last = y
        ranges.append((start, last, max(row_reds[start:last+1])))
        ranges.sort(key=lambda x: -x[2])
        for r in ranges[:10]:
            print(f"  Y {r[0]:5d}-{r[1]:5d} (height: {r[1]-r[0]:4d}px, intensity: {r[2]:6.0f})")
    
    # Create full-page side-by-side crop of diff areas
    # Show top 3000px as a strip
    def crop_strip(img, y_start, height=800, width=700):
        return img.crop((0, y_start, min(width, img.width), min(y_start + height, img.height)))
    
    # Save comparison strips at key sections
    section_boundaries = [
        ('banner', 145, 632),          # after header
        ('about', 776, 1306),          # about section  
        ('start-learning', 1610, 2347),
        ('full-time', 2347, 2873),
        ('courses', 2873, 3519),
        ('portfolio', 3519, 3977),
        ('discover-offer', 3977, 4300),
        ('counter', 4300, 4846),
        ('faq', 4710, 5770),
        ('features', 5682, 6591),
        ('testimonial', 6591, 7390),
        ('contact', 7390, 8068),
    ]
    
    for sec_name, y_start, y_end in section_boundaries:
        height = y_end - y_start
        strip_w = 720
        ref_strip = ref_img.crop((0, y_start, strip_w, y_end))
        v2_strip = v2_img.crop((0, y_start, strip_w, min(y_end, v2_img.height)))
        diff_strip = diff_img.crop((0, y_start, strip_w, min(y_end, diff_img.height)))
        
        combined_w = strip_w * 3 + 20
        combined_h = max(ref_strip.height, v2_strip.height) + 30
        combined = Image.new('RGB', (combined_w, combined_h), (220, 220, 220))
        combined.paste(ref_strip, (0, 30))
        combined.paste(v2_strip, (strip_w + 10, 30))
        combined.paste(diff_strip, (strip_w * 2 + 20, 30))
        
        draw = ImageDraw.Draw(combined)
        draw.text((5, 5), f"REF: {sec_name}", fill=(0,100,0))
        draw.text((strip_w + 15, 5), "V2", fill=(0,0,200))
        draw.text((strip_w * 2 + 25, 5), "DIFF", fill=(180,0,0))
        
        out = f'{OUT_DIR}/{sec_name}-strip.png'
        combined.save(out)
        
        # Check if this strip has many diff pixels
        diff_strip_arr = np.array(diff_strip.convert('RGB'))
        r_mask = (diff_strip_arr[:,:,0] > 150) & (diff_strip_arr[:,:,1] < 100) & (diff_strip_arr[:,:,2] < 100)
        diff_pct = r_mask.sum() / (diff_strip.width * diff_strip.height) * 100
        print(f"  {sec_name} (Y {y_start}-{y_end}): diff={diff_pct:.2f}% → {out}")

print("\nDone!")

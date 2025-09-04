import os
from PIL import Image

# Folder path
folder_path = r"D:\spectrum-of-skill\public\images"

# Loop through all files in the folder
for filename in os.listdir(folder_path):
    file_path = os.path.join(folder_path, filename)

    # Only process PNG and JPG/JPEG files
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        print(f"Converting: {filename}")

        try:
            # Open image
            img = Image.open(file_path)

            # Create new file path with .webp extension
            new_file_path = os.path.splitext(file_path)[0] + ".webp"

            # Save as WebP (quality can be adjusted: 30–80 recommended)
            img.save(new_file_path, "WEBP", quality=50, optimize=True)

            # Delete old file
            os.remove(file_path)
            print(f"✅ Converted & deleted original: {filename}")

        except Exception as e:
            print(f"❌ Error processing {filename}: {e}")

print("🎉 All images converted to WebP and originals removed!")

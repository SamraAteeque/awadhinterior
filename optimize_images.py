
import os
from PIL import Image

def optimize_images(directory, max_width=1920, quality=80):
    print(f"Optimizing images in {directory}...")
    
    # Textures/Assets to optimize (add more if needed)
    target_files = [
        "ID1.jpg", "ID2.jpg", "ID3.jpg", "ID4.jpg", "ID5.jpg", "ID6.jpg",
        "logo.jpg"
    ]
    
    # Also scan for heavy images > 1MB if strictly needed, but targeting known ones first
    
    for filename in os.listdir(directory):
        if filename in target_files or (filename.lower().endswith(('.jpg', '.jpeg', '.png')) and os.path.getsize(os.path.join(directory, filename)) > 1024*1024):
            filepath = os.path.join(directory, filename)
            
            try:
                with Image.open(filepath) as img:
                    # Check size
                    width, height = img.size
                    if width > max_width:
                        ratio = max_width / width
                        new_height = int(height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} from {width}x{height} to {max_width}x{new_height}")
                    
                    # Save optimized
                    img.save(filepath, optimize=True, quality=quality)
                    print(f"Computed optimization for {filename}")
            except Exception as e:
                print(f"Error optimizing {filename}: {e}")

if __name__ == "__main__":
    public_dir = os.path.join(os.getcwd(), "public")
    if os.path.exists(public_dir):
        optimize_images(public_dir)
        print("Done.")
    else:
        print("Public directory not found.")

import os

def rename_images(folder_path, base_name, start_num=1, padding=2):
    """
    Renames all image files in a folder sequentially.
    
    Args:
        folder_path (str): Path to the folder containing images.
        base_name (str): Base name for the new filenames (e.g., "demo").
        start_num (int): Starting number for the sequence (default: 1).
        padding (int): Number of digits for zero-padding (default: 2).
    """
    # Supported image extensions
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff')
    
    # Get all files in the folder
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]
    files.sort()  # Sort alphabetically
    
    # Check if there are images to rename
    if not files:
        print("No image files found in the specified folder.")
        return
    
    print(f"Found {len(files)} image files. Renaming...")
    
    # Rename each file
    for i, file in enumerate(files, start=start_num):
        # Get file extension
        ext = os.path.splitext(file)[1].lower()
        
        # New filename (e.g., demo01.jpg)
        new_name = f"{base_name}{i:0{padding}d}{ext}"
        old_path = os.path.join(folder_path, file)
        new_path = os.path.join(folder_path, new_name)
        
        # Avoid overwriting existing files
        if os.path.exists(new_path):
            print(f"Warning: {new_name} already exists. Skipping.")
            continue
        
        os.rename(old_path, new_path)
        print(f"Renamed: {file} → {new_name}")
    
    print("Renaming completed!")

if __name__ == "__main__":
    # Ask for user input
    folder_path = "/Users/laughingli/Downloads/muppets"
    base_name = "muppets"
    start_num = 1
    padding = 2
    
    # Validate folder path
    if not os.path.isdir(folder_path):
        print("Error: Invalid folder path.")
    else:
        rename_images(folder_path, base_name, start_num, padding)
from PIL import Image
import os

input_directory = "/path/to/input_directory"
output_directory = "/path/to/output_directory"

# Create output directory if it doesn't exist
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

for filename in os.listdir(input_directory):
    if filename.endswith(".png"):  # Check for PNG files, add conditions for other formats if needed
        input_file_path = os.path.join(input_directory, filename)
        output_file_path = os.path.join(output_directory, filename)
        
        image = Image.open(input_file_path)
        pixels = image.load()  # Create pixel map

        width, height = image.size
        for y in range(height):
            for x in range(width):
                r, g, b, a = image.getpixel((x, y))
                
                # Check if the pixel is black
                if r == 0 and g == 0 and b == 0:
                    pixels[x, y] = (255, 255, 255, a)  # Replace with white color

        image.save(output_file_path)

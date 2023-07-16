mkdir resized_images
for file in *.jpg; do ffmpeg -i "$file" -vf "scale=10:-1" "resized_images/$file"; done

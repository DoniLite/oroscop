import svgwrite
from PIL import Image, ImageDraw, ImageFont

# Chemin vers le fichier de police
font_path = "./DancingScript-VariableFont_wght.ttf"

# Créer une nouvelle image
image = Image.new('RGBA', (100, 100), (255, 255, 255, 0))

# Dimensions de l'image
width = 100
height = 100

# Dessiner sur l'image
draw = ImageDraw.Draw(image)

# Définir la police et le texte
font = ImageFont.truetype(font_path, 100)
text = "O"
font_size = 100

# Obtenir la taille du texte
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

# Calculer la position pour centrer le texte
position = ((image.width - text_width) / 2, (image.height - text_height) - 50 / 2)

# Ajouter le texte à l'image
draw.text(position, text, font=font, fill="black")



# Créer une nouvelle image SVG
dwg = svgwrite.Drawing('logo.svg', profile='tiny', size=(width, height))

# Calculer la position pour centrer le texte
x = (width - text_width) / 2
y = (height - text_height) / 2 + text_height

# Ajouter le texte à l'image SVG
dwg.add(dwg.text(text, insert=(x, y), font_size=font_size, font_family=font))


# Enregistrer l'image PNG
image.save("logo.png")

# Enregistrer l'image SVG
dwg.save()

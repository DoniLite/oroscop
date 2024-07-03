import svgwrite
from PIL import Image, ImageDraw, ImageFont

# Chemin vers le fichier de police
font_path = "./DancingScript-VariableFont_wght.ttf"

# Dimensions de l'image
width = 100
height = 100

# Texte et police
text = "O"
font_size = 40

# Charger la police avec PIL pour obtenir la taille du texte
font = ImageFont.truetype(font_path, font_size)

# Créer une image temporaire pour calculer la taille du texte
temp_image = Image.new('RGB', (width, height))
draw = ImageDraw.Draw(temp_image)

# Obtenir la boîte englobante du texte
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

# Créer une nouvelle image SVG
dwg = svgwrite.Drawing('logo.svg', profile='full', size=(width, height))

# Calculer la position pour centrer le texte
x = (width - text_width) / 2
y = (height - text_height) / 2 + text_height

# Ajouter le texte à l'image SVG
dwg.add(dwg.text(text, insert=(x, y), font_size=font_size, font_family=font_path))

# Enregistrer l'image SVG
dwg.save()

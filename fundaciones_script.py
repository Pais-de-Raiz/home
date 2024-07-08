import json
import gspread
from google.oauth2.service_account import Credentials
from jinja2 import Environment, FileSystemLoader
import os

# Define los ámbitos necesarios para acceder a Google Sheets y Google Drive
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.readonly"
]

# Lee las credenciales desde el archivo client_secrets.json
with open('client_secrets.json') as f:
    creds_dict = json.load(f)  # Asegúrate de que el archivo tiene un JSON válido

creds = Credentials.from_service_account_info(creds_dict, scopes=scopes)
gc = gspread.authorize(creds)

# Abre tu hoja de cálculo por su ID
id_documento = '1LlilYZIDVp4al8WGNr1sdZg-OuQW6jSK5zii6zHAVwU'
hoja_de_calculo = gc.open_by_key(id_documento)
nombre_de_la_pestaña = "fundaciones-detalle"
pestaña = hoja_de_calculo.worksheet(nombre_de_la_pestaña)

# Obtener todos los datos de la hoja
data = pestaña.get_all_records()

# Configurar Jinja2
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('fundaciones_template.html')

# Crear carpeta fundaciones si no existe
if not os.path.exists('fundaciones'):
    os.makedirs('fundaciones')

# Lista para almacenar los nombres de los archivos generados
archivos_generados = []

# Generar los documentos HTML
for row in data:
    imgProfile = row['img']
    tipo = row['Tipo']
    fundacion = row['fundacion']
    descripcion_corta = row['descripcion_corta']
    descripcion_larga = row['descripcion_larga'].replace('\n', '<br>\n')
    img1 = row['img 1']
    img2 = row['img 2']
    img3 = row['img 3']
    img4 = row['img 4']
    filename = row['filename']

    # Renderizar la plantilla con los datos de la fila
    html_content = template.render(
        imgProfile=imgProfile,
        tipo=tipo,
        fundacion=fundacion,
        descripcion_corta=descripcion_corta,
        descripcion_larga=descripcion_larga,
        img1=img1,
        img2=img2,
        img3=img3,
        img4=img4
    )

    # Guardar el contenido HTML en un archivo dentro de la carpeta fundaciones
    file_path = f"fundaciones/{filename}.html"
    
    # Comparar contenido si el archivo existe
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            existing_content = f.read()
        if existing_content != html_content:
            with open(file_path, 'w') as f:
                f.write(html_content)
            archivos_generados.append(file_path)
    else:
        with open(file_path, 'w') as f:
            f.write(html_content)
        archivos_generados.append(file_path)

print("Documentos HTML generados con éxito.")
print("Archivos generados:")
for archivo in archivos_generados:
    print(archivo)

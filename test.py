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
nombre_de_la_pestaña = "servicios-detalle"
pestaña = hoja_de_calculo.worksheet(nombre_de_la_pestaña)

# Obtener todos los datos de la hoja
data = pestaña.get_all_records()

# Configurar Jinja2
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('template.html')

# Crear carpeta experiencia-detalle si no existe
#if not os.path.exists('experiencia-detalle'):
#    os.makedirs('experiencia-detalle')

# Lista para almacenar los nombres de los archivos generados
archivos_generados = []

# Generar los documentos HTML
for row in data:
    codigo = row['codigo']
    nombre_servicio = row['experiencia']
    capacidad = row['capacidad']
    cantidad = row['cantidad']
    unidad = row['unidad']
    modalidad = row['modalidad']
    url_reserva = row['URL de Reserva']
    categoria = row['categoria']
    descripcion_1 = row['descripcion1']
    MetaDescription = row['meta_descripcion']

    # Convertir los saltos de línea en <br>
    descripcion_1 = descripcion_1.replace('\n', '<br>\n')
    
    # Crear el id dinámico para el div
    id_servicio = f"servicio-{codigo}"
    
    # Usar 'nombre_servicio' como el título largo
    titulo_largo = nombre_servicio
    
    # Renderizar la plantilla con los datos de la fila
    html_content = template.render(
        id_servicio=id_servicio,
        capacidad=capacidad,
        unidad=unidad,
        cantidad=cantidad,
        modalidad=modalidad,
        url_reserva=url_reserva,
        categoria=categoria,
        nombre_servicio=nombre_servicio,
        titulo_largo=titulo_largo,
        descripcion_1=descripcion_1,
        MetaDescription=MetaDescription
    )

    # Guardar el contenido HTML en un archivo dentro de la carpeta experiencia-detalle
    file_path = f"experiencia-detalle/{codigo}.html"
    
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

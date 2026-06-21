#!/usr/bin/env python3
"""
Optimiza las imágenes de una unidad para el cuaderno (HTML + impresión).
- Hace backup de los originales en una subcarpeta 'originales/'
- Redimensiona el lado largo según el tipo de imagen
- Cuantiza a 256 colores (ideal para arte plano de cómic) y guarda PNG optimizado

Uso:
    python3 optimizar-imagenes.py /ruta/a/unidad-XX/images
    (si no pasas ruta, usa la carpeta actual)

Requiere Pillow:  pip3 install Pillow
"""
import os, sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Falta Pillow. Instálalo con:  pip3 install Pillow")

# Lado largo objetivo según el nombre del archivo (px). Default si no coincide.
REGLAS = {
    "portada": 1500,   # banner ancho
    "doodles": 1200,   # se recortan en trozos, conviene algo más de resolución
    "texto":   1100,
    "mapa":    1100,
}
DEFAULT_LADO = 1024     # fichas, cierre, etc.
COLORES = 256

def lado_objetivo(nombre):
    for clave, px in REGLAS.items():
        if clave in nombre:
            return px
    return DEFAULT_LADO

def main():
    carpeta = sys.argv[1] if len(sys.argv) > 1 else "."
    carpeta = os.path.abspath(carpeta)
    backup = os.path.join(carpeta, "originales")
    os.makedirs(backup, exist_ok=True)

    pngs = [f for f in os.listdir(carpeta)
            if f.lower().endswith(".png") and os.path.isfile(os.path.join(carpeta, f))]
    if not pngs:
        sys.exit(f"No hay PNG en {carpeta}")

    total = 0
    for f in sorted(pngs):
        ruta = os.path.join(carpeta, f)
        orig = os.path.join(backup, f)
        # Si ya hay original guardado, re-optimizamos desde él (idempotente)
        if os.path.exists(orig):
            fuente = orig
        else:
            os.replace(ruta, orig)   # mueve el original a backup
            fuente = orig

        im = Image.open(fuente).convert("RGB")
        im.thumbnail((lado_objetivo(f), lado_objetivo(f)))
        q = im.quantize(colors=COLORES, method=Image.FASTOCTREE, dither=Image.NONE)
        q.save(ruta, optimize=True)

        kb = os.path.getsize(ruta) / 1024
        total += kb
        print(f"  {f:28s} {im.size[0]}x{im.size[1]:<5}  {kb:7.1f} KB")

    print("-" * 52)
    print(f"  {'TOTAL':28s} {'':11s}  {total:7.1f} KB  ({total/1024:.2f} MB)")
    print(f"\nOriginales guardados en: {backup}")

if __name__ == "__main__":
    main()

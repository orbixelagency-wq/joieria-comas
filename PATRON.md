# PATRÓN — estudio de prendas 360°

Herramienta paramétrica para diseñar prendas: las **medidas reales en cm**
generan la geometría 3D, el patrón plano técnico y la ficha técnica (tech pack).
Nada está dibujado a mano.

**Tipos de prenda (16):** camiseta, camiseta oversize, manga larga, sudadera,
hoodie, sudadera con cremallera, bomber, camiseta de tirantes, crop top, polo,
vestido (línea A), pantalón, pantalón cargo, jogger, short y bóxer.

## Cómo abrirla
- Con el servidor del proyecto: `node server.mjs` → http://localhost:4321/patron.html
- O abriendo `patron.html` directamente en el navegador (funciona sin conexión:
  el motor 3D está incluido en `vendor/three.min.js`).

## Flujo de trabajo
1. **Prenda** — tipo, construcción (canalé, capucha, bolsillos, cremallera…) e identificación.
2. **Medidas** — tabla POM por talla y gradación completa (XS–XXL). Cambia una cifra y el 3D se rehace al milímetro.
3. **Color** — 5 paneles (cuerpo, mangas, canalé, interior, avíos) y colorways guardadas.
4. **Tejido** — material, gramaje y técnica de estampación.
5. **Arte** — capas de texto, imagen y formas colocadas en cm reales sobre el panel,
   con **plantillas de estampación** (Centro, Pecho izq., Dos líneas, Vertical, Contorno, Sello) que colocan el arte en las posiciones estándar.
6. **Vista** — luz, fondo, sombra y guías para fotos de producto.
7. **Ficha** — exportar PNG (delante/detrás/360°), **vídeo 360° (.webm)**, plano técnico, arte para taller, proyecto `.json` y ficha técnica imprimible.

## Atajos de teclado
- **Ctrl/Cmd + Z** — deshacer · **Ctrl/Cmd + Shift + Z** (o Ctrl+Y) — rehacer
- **Ctrl/Cmd + S** — guardar · **Ctrl/Cmd + D** — duplicar capa
- **Supr / Retroceso** — borrar capa seleccionada · **Esc** — deseleccionar
- **Flechas** — mover la capa (con **Mayús**, pasos mayores)

## Persistencia
El trabajo se **autoguarda** en el navegador y se recupera al reabrir la app.
"Guardar" fuerza el guardado; "Ficha → Proyecto .json" exporta una copia portable.

## Mejoras recientes
- Motor 3D incluido localmente (la app ya no depende del CDN y funciona sin conexión).
- Guardado/recuperación real en el navegador + autoguardado (antes no funcionaba).
- Deshacer/Rehacer completos, también al arrastrar arte en el plano.
- Atajos de teclado y selector de tipo de forma (rectángulo/círculo/línea).
- Edición de texto más fluida y cabecera adaptada a móvil.
- **6 tipos de prenda nuevos** (tirantes, crop, polo con tapeta, vestido, cargo).
- **Plantillas de estampación** con posiciones estándar (un clic).
- **Exportación de vídeo 360°** (.webm) además de la tira de fotogramas.
- **Render más realista**: tono de estudio (ACES), micro-textura de tejido y superficies más suaves.

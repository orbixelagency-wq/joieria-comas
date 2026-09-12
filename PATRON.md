# PATRÓN — estudio de prendas 360°

Herramienta paramétrica para diseñar prendas (camisetas, sudaderas, hoodies,
pantalones…): las **medidas reales en cm** generan la geometría 3D, el patrón
plano técnico y la ficha técnica (tech pack). Nada está dibujado a mano.

## Cómo abrirla
- Con el servidor del proyecto: `node server.mjs` → http://localhost:4321/patron.html
- O abriendo `patron.html` directamente en el navegador (funciona sin conexión:
  el motor 3D está incluido en `vendor/three.min.js`).

## Flujo de trabajo
1. **Prenda** — tipo, construcción (canalé, capucha, bolsillos, cremallera…) e identificación.
2. **Medidas** — tabla POM por talla y gradación completa (XS–XXL). Cambia una cifra y el 3D se rehace al milímetro.
3. **Color** — 5 paneles (cuerpo, mangas, canalé, interior, avíos) y colorways guardadas.
4. **Tejido** — material, gramaje y técnica de estampación.
5. **Arte** — capas de texto, imagen y formas colocadas en cm reales sobre el panel.
6. **Vista** — luz, fondo, sombra y guías para fotos de producto.
7. **Ficha** — exportar PNG (delante/detrás/360°), plano técnico, arte para taller, proyecto `.json` y ficha técnica imprimible.

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

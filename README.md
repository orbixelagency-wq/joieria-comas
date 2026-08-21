# Joieria Comas — web

Web d'una pàgina per a **Joieria Comas**, casa familiar de joiers i rellotgers a
Santa Coloma de Farners des de 1862. HTML/CSS/JS pur (sense framework).

## Executar en local
Cal [Node.js](https://nodejs.org). A la carpeta del projecte:

```bash
node server.mjs
```

Obre **http://localhost:4321**. (O doble clic a `OBRIR-WEB.bat` a Windows.)

El servidor és necessari perquè el hero i les imatges es carreguin bé (peticions de rang HTTP).

## Estructura
- `index.html` — pàgina
- `css/main.css` · `css/ui.css` — estils
- `js/main.js` — hero (rellotge que es munta amb scroll), carrusel, animacions
- `js/ui.js` — modal d'accés (demo) + xat de consergeria
- `assets/` — imatges i vídeos
- `server.mjs` — servidor estàtic local (amb suport de rang)
- `QUESTIONARI-CLIENT.html` — qüestionari per recollir contingut del negoci

## Marques
Rellotges oficials **Hugo Boss** i **Daniel Wellington**. Taller propi de joieria i rellotgeria.

## Fonts
Bodoni Moda + Jost + Archivo (via Google Fonts) · GSAP (via CDN).

import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 4321;
const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4", ".webm": "video/webm", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml",
  ".woff2": "font/woff2", ".ico": "image/x-icon", ".md": "text/plain; charset=utf-8",
};

http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent((req.url || "/").split("?")[0]);
    if (p === "/") p = "/index.html";
    const full = normalize(join(root, p));
    if (!full.startsWith(root)) { res.writeHead(403).end("Forbidden"); return; }
    const info = await stat(full).catch(() => null);
    if (!info || !info.isFile()) { res.writeHead(404).end("Not found"); return; }
    const type = types[extname(full).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      let start = m && m[1] ? parseInt(m[1], 10) : 0;
      let end = m && m[2] ? parseInt(m[2], 10) : info.size - 1;
      if (isNaN(start)) start = 0;
      if (isNaN(end) || end >= info.size) end = info.size - 1;
      if (start > end) { res.writeHead(416, { "Content-Range": `bytes */${info.size}` }).end(); return; }
      const buf = await readFile(full);
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Range": `bytes ${start}-${end}/${info.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Cache-Control": "no-cache",
      });
      res.end(buf.subarray(start, end + 1));
      return;
    }
    const data = await readFile(full);
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Cache-Control": "no-cache" });
    res.end(data);
  } catch (e) { res.writeHead(500).end("Error"); }
}).listen(port, () => console.log(`Joieria Comas → http://localhost:${port}`));

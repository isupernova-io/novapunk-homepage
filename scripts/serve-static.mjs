import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';

const root = resolve(process.argv[2] || 'out');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405).end(); return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/waitlist' || pathname.startsWith('/waitlist/')) {
      response.writeHead(301, { Location: '/contact/' }).end(); return;
    }
    let file = resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end(); return;
    }
    let info = await stat(file);
    if (info.isDirectory()) {
      file = resolve(file, 'index.html'); info = await stat(file);
    }
    if (!info.isFile()) throw new Error('Not a file');
    const headers = { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d+)-(\d*)$/.exec(range);
      const start = match ? Number(match[1]) : -1;
      const end = match && match[2] ? Number(match[2]) : info.size - 1;
      if (start < 0 || start > end || end >= info.size) {
        response.writeHead(416, { 'Content-Range': `bytes */${info.size}` }).end(); return;
      }
      response.writeHead(206, { ...headers, 'Content-Length': end - start + 1, 'Content-Range': `bytes ${start}-${end}/${info.size}` });
      if (request.method === 'HEAD') response.end();
      else createReadStream(file, { start, end }).pipe(response);
    } else {
      response.writeHead(200, { ...headers, 'Content-Length': info.size });
      if (request.method === 'HEAD') response.end();
      else createReadStream(file).pipe(response);
    }
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
  }
});
server.listen(4173, '127.0.0.1', () => console.log('Static preview: http://localhost:4173'));

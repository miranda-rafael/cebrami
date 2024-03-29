const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get('/', (req, res) => app.render(req, res, '/index'));
  server.get('/index', (req, res) => app.render(req, res, '/index'));
  server.get('/blog', (req, res) => app.render(req, res, '/blog'));
  server.get('/compre', (req, res) => app.render(req, res, '/compre'));
  server.get('/faq', (req, res) => app.render(req, res, '/faq'));
  server.get('/indique', (req, res) => app.render(req, res, '/indique'));
  server.get('/meio-ambiente', (req, res) => app.render(req, res, '/meio-ambiente'));
  server.get('/quem-somos', (req, res) => app.render(req, res, '/quem-somos'));
  
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Custom Express Server ready on http://localhost:${port}`);
  });
});
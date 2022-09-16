const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/addons/p5.sound.min.js"></script>
      <link rel="stylesheet" type="text/css" href="style.css">
      <meta charset="utf-8" />
    </head>
    <body>
      <main>
      </main>
      <script src="run.js"></script>
      <script src="car.js"></script>
      <script src="player.js"></script>
      <script src="street.js"></script>
      <script src="lib/p5.collide2d.js"></script> 
      <script src="factoryStreet.js"></script>
      <script src="carStreet.js"></script>
    </body>
  </html>
  `);
}

const server = http.createServer(requestListener);
server.listen(8080);
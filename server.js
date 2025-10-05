const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

// Puerto dinámico para Render
const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

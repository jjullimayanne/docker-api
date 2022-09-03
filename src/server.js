const app = require("./app");
require("dotenv/config");
const HOST = "0.0.0.0";
///app.listen(process.env. PORT || 3000);
const ENV = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>essa é uma pagina gerada pelo docker<h1>");
});
app.listen(ENV, HOST);

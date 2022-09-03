const express = require("express");

// const PORT = 3000;
// const HOST = "0.0.0.0";

class AppController {
  constructor() {
    this.express = express();
    // this.route();
  }
//   route() {
//     this.express.use(require("./routes"));
//   }
//   middleware() {
//     this.express.use(express.json());
//   }
}

module.exports = new AppController().express;
// app.get("/", (req, res) => {
//   res.send("Hello Worjhhld");
// });
// app.listen(PORT, HOST);

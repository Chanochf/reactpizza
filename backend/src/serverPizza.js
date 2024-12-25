const express = require("express");
app = express();
import homeRouter from '../src/routers/homeRouter.js'
const port = 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port} .....`);
});
app.use('/home', homeRouter);

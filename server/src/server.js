const morgan = require('morgan');
const bodyParser = require("body-parser");
const router = require('./routes/router');
const app = require('./modules/app');

const errorHandler = (req, res, err) => {
  res.status(500);
  res.json(err.stack);
}

const startServer = port => {

  app
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler)

  app.listen(port);

  console.log(`Server running at http://localhost:${port}/`);
};

module.exports = startServer;
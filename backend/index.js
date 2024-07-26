const express = require("express");
const mainRouter = require("./routes/mainRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

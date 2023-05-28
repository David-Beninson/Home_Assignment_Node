const express = require("express");
const imagesRouter = require("./src/routes/images");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/images", imagesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

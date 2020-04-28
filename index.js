const express = require("express");
const app = express();
const router = require("./config/routes");
const setupDB = require("./config/database");
const PORT = process.env.PORT || 4000;
const fs = require("fs");
const dir = "./uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use("/", router);
setupDB();

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}.........`);
});

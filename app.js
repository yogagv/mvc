const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");
const { errorController } = require("./controller/products");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.routes);
app.use(shopRouter);

app.use(errorController);

app.listen(3000);

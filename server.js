"use strict";

const express = require("express");
const unblocker = require("unblocker");

const whitelist = require("./whitelist.js");

const app = express();

app.use(
  unblocker({
    requestMiddleware: [
      whitelist({
        allowedDomains: ["iyg.etr.org"],
        message: "ERROR. Request Failed; Request not permitted. Make sure you are only visiting the URLs you are supposed to"
      })
    ]
  })
);

app.get("/", (req, res) =>
  res.redirect("https://iyg.etr.org/P4OBM6E0A0ASGLA60HHVEEO?Course=IYG")
);

app.listen(8080);

console.log("app listening on port 8080. Test at http://localhost:8080/");

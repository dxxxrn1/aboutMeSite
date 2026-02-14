
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/email", (req, res) => {
    res.redirect("mailto:darrenforster3@gmail.com");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
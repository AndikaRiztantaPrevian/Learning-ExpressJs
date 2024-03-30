// ========== Call all function express js ==========
const express = require("express");

// ========== Making object express js ==========
const app = express();

// ========== Route Basic Methods ==========
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/coffee", (req, res) => {
  res.send("Menu Coffee");
});

app.post("/pesan", (req, res) => {
  res.send("Silahkan tunggu sampai pesanannya datanya :3");
});

app.get("/drink", (req, res) => {
  res.send("Menu Drink");
});

// ========== Route Parameters Methods ==========

// Example = /coffee/americano
app.get("/coffee/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Filter : ${name}`);
});

// Example = /coffee/americano/arabica
app.get("/coffee/:name/:beans", (req, res) => {
  const { name, beans } = req.params;
  res.send(`Filter : ${name} | Beans: ${beans}`);
});

// ========== Query String Methods | Example = search?q=chrome ==========
app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.send("<h1>Yang anda cari tidak ada atau tidak ditemukan</h1>");
  }

  res.send(`<h1>Search Keywords : ${q}</h1>`);
});

// ========== Handle 404 / Not Found ==========
app.get("*", (req, res) => {
  res.send("Halaman tidak ditemukan.");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

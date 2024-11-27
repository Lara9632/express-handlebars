const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Handlebars config
app.engine("hbs", exphbs.engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => res.render("home", { title: "Home", name: "Paola y Liz" }));
app.get("/about", (req, res) => res.render("about", { title: "About Us" }));
app.get("/services", (req, res) => res.render("services", { title: "Our Services" }));
app.get("/contact", (req, res) => res.render("contact", { title: "Contact Us" }));
app.get("/faq", (req, res) => res.render("faq", { title: "FAQ" }));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let blogData = [
  {
    id: uuid(),
    title: "Picture1",
    image:
      "https://images.unsplash.com/photo-1646673974332-804492240491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80",
    description: "Some description",
  },
];

// Go to Main Page...
app.get("/", (req, res) => {
  res.render("index");
});

//Go to see all blogs...
app.get("/blogs", (req, res) => {
  res.render("blogs/index", { blogData });
});

app.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

app.post("/blogs", (req, res) => {
  const { title, image, description } = req.body;
  blogData.push({ id: uuid(), title, image, description });
  res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogData.find((blog) => blog.id === id);
  res.render("blogs/show", { blog });
});

app.get("/blogs/:id/edit", (req, res) => {
  const id = req.params.id;
  const blog = blogData.find((blog) => blog.id === id);
  res.render("blogs/edit", { blog });
});

app.listen(PORT, () => {
  console.log("Server Started");
});

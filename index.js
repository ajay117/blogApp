const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let blogData = [
  {
    title: "Picture1",
    image:
      "https://images.unsplash.com/photo-1646673974332-804492240491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80",
    description: "Some description",
  },
  {
    title: "Picture2",
    image:
      "https://images.unsplash.com/photo-1646673974332-804492240491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80",
    description: "Some description",
  },
  {
    title: "Picture3",
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

app.listen(PORT, () => "Server Started");

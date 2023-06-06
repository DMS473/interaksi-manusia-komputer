const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const { Log, User, Post } = require("./models");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// mengambil dat
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//     // res.render("luasSegitiga.html")
//     fs.readFile('./views/luasSegitiga.html', 'utf8', (err, text) => {
//         res.send(text);
//     });
// })

app.post("/", async (req, res) => {
  try {
    const { activity, type } = req.body;
    let result = await Log.create({
      activity,
      type,
    });

    res.status(201).json(result);
  } catch (err) {
    res.send(err);
  }
});

app.get("/log", async (req, res) => {
  //   res.send('Hello World!')
  // res.render("luasSegitiga.html")
  // fs.readFile('./views/luasSegitiga.html', 'utf8', (err, text) => {
  //     res.send(text);
  // });
  try {
    let movies = await Log.findAll();

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    let result = await User.create({
      username,
      password,
    });

    res.status(201).json(result);
  } catch (err) {
    res.send(err);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userWithEmail = await User.findOne({
      where: { username: username },
    });

    if (userWithEmail) {
      if (userWithEmail.password == password)
        return res.json({ message: "Login Success" });
    }
    res.status(401);
    return res.json({ message: "Login Failure" });
    // if (userWithEmail) return res.json({ message: "User  found" });
    // if (userWithEmail.password == password)
    //   return res.json({ message: "password benar" })

    // const jwtToken = jwt.sign(
    //   { id: userWithEmail.id, username: userWithEmail.username },
    //   process.env.JWT_SECRET
    // );

    // res.json({ message: "Welcome back!", token: jwtToken });
  } catch (err) {
    res.send(err);
  }
});

// post request
app.get("/getPostBanyak", async (req, res) => {
  try {
    let posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.send(err);
  }
});

app.post("/addPost", async (req, res) => {
  try {
    const { title, image, slug, excerpt, body } = req.body;
    let result = await Post.create({
      title,
      image,
      slug,
      excerpt,
      body,
    });
    res.status(201).json(result);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/deletePost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let result = await Post.destroy({
      where: {id: id}
    })
    res.json(result);
  } catch (err) {
    res.send(err);
  }
})

app.put("/updatePost/:slug", async (req, res) => {
  try {
    const id = req.params.id;
    const {title, body, image, slug, excerpt} = req.body;

    let result = await Post.update({
      title,
      image,
      slug,
      excerpt,
      body
    }, {
      where: {slug: slug}
    })
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
})

app.get("/getPost/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    let post = await Post.findOne({where: {slug: slug}});
    res.json(post);
  } catch (err) {
    res.send(err);
  }
})

// Listening port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

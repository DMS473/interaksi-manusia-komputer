const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const {Log} = require("./models")
const cors = require("cors");

// mengambil dat
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
//   res.send('Hello World!')
    // res.render("luasSegitiga.html")
    fs.readFile('./views/luasSegitiga.html', 'utf8', (err, text) => {
        res.send(text);
    });
})

app.post('/', async (req, res) => {
  try{
    const {activity, type } = req.body
            let result = await Log.create({
                activity,
                type
            })
    
            res.status(201).json(result)
  } catch(err){
    res.send(err)
  }
})

app.get('/log', async (req, res) => {
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
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

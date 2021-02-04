// Import Needed Modules
require("dotenv").config(); // connects to .env
console.log(process.env.MONGO_URI ? "linked" : "not working");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
// Import album.js to create new fruit
const Album = require("./models/album.js");

// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({ extended: true })); // parse form data into req.body
app.use(express.json()); // parse raw json data
app.use(methodOverride('_method')); //override method on forms so you can delete
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// View engine to read JSX files
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Connect to MongoDB, making sure .env file is linked correctly
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("connected", () =>
  console.log("Mongoose is ready to Mongoose")
);

// CREATE ROUTE

/* New Route */

 app.get("/albums/new", (req, res) => {
  res.render("New");
});

/* Create Route */

// Route handles Post requests from form
app.post("/albums", (req, res) => {
  // res.send('Album Submitted')
//   req.body.readyToEat === "on"
//     ? (req.body.readyToEat = true)
//     : (req.body.readyToEat = false);
  Album.create(req.body, (failure) => {
    if (!failure) {
      res
      .status(200)
      .redirect("/albums");
    } else {
      res
      .status(400)
      .send(failure);
    }
  });
});

// READ

/* Index */
app.get("/albums", (req, res) => {
  Album.find({}, (err, foundAlbums) => {
    if (!err) {
      console.log(foundAlbums);
      res
      .status(200)
      .render("Index", { albums: foundAlbums });
    } else {
      res
      .status(400)
      .send(err);
    }
  });
});

/* Show */

app.get("/albums/:id", (req, res) => {
  Album.findById(req.params.id, (err, foundAlbum) => {
    if (!err) {
      res
      .status(200)
      .render("Show", {
        album: foundAlbum,
      });
    } else {
      res
      .status(400)
      .send(err);
    }
  });
});


// DELETE

app.delete('/albums/:id', (req, res) => {
    Album.findByIdAndDelete(req.params.id, (err) => {
        if(!err) {
            res
            .status(200)
            .redirect('/albums')
        } else {
            res
            .status(400)
            .send(err)
        }
    })
})

// UPDATE

app.put("/albums/:id", (req, res) => {
  Album.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
    if (!err) {

      let albumId = req.params.id;
      
      res
      .status(200)
      .redirect(`/albums/${albumId}`)
    } else {
      res
      .status(400)
      .send(err)
    }
  });
});


// BUY BUTTON
app.put('/albums/:id/buy', async (req, res) => {
  try {
    await Album.findByIdAndUpdate(req.params.id, {$inc: { qty: -1 }})
    res.redirect('back')
  } catch (err) {
    res.send(err.message)
  }
})


// EDIT

app.get("/albums/:id/edit", (req, res) => {
  Album.findById(req.params.id, (err, foundAlbum) => {
    if (!err) {
      res
      .status(200)
      .render("Edit", {
        album: foundAlbum,
      });
    } else {
      res
      .status(400)
      .send(err);
    }
  });
});





app.listen(PORT, () => {
  console.log(`Listening to Andre ${PORT}`);
});

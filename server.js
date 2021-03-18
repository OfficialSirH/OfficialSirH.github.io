const express = require("express"),
    app = express(),
    fetch = require('node-fetch'),
    port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.route('/webhook')
  .get((req, res) => res.json({ message: 'noice' }))
  .post((req, res) => res.json({ message: 'noice' }));

app.use((req, res)=>res.redirect(`http://localhost:${port}/`)/*res.status(404).send({url: req.originalUrl + ' not found'})*/);

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

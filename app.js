const express = require('express')  // require express
const app = express()  // create a request handler function
const server = require('http').createServer(app)  // use our app to create a server
const path = require('path')
const port = process.env.PORT || 8081

// include the static client-side files (.html, .css, .js)
app.use(express.static(path.join(__dirname)))

// on a GET request to default page, serve up our index.html....
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

// http POST /contact
app.post("/contact", function (req, res) {
  const name = req.body.inputname;
  const email = req.body.inputemail;
  const company = req.body.inputcompany;
  const comment = req.body.inputcomment;
  const isError = true;

  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: '"Daiwei Chen" <chen.daiwei@yahoo.com>', // sender address
    to: 's529299@nwmissouri.edu, chen.daiwei@yahoo.com', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: comment,
    err: isError
  }
})

// this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
 res.render("404")
})

// Listen for an app request on port - use backtics with variable
server.listen(port, function () {
  console.log(`listening on http://127.0.0.1:${port}/`)
})
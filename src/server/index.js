const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8080

const testFolder = path.join(__dirname, '..', '..', 'build', 'images');

// // body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/pics', function (req, res) {
  fs.readdir(testFolder, (err, files) => {
    const gallery = files.filter((file) => file.includes('VStarYoga'));
    console.log({gallery})
    res.send(gallery)
  });
})

app.post('/email', async function (req, res) {
  const {name, email, subject, message} = req.body;

  try {
      let emailAccount = {user: process.env.EMAIL, pass: process.env.PASSWORD};

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailAccount.user,
      pass: emailAccount.pass,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    to: 'jscheinhorn@gmail.com, veronica@arrivemindful.com',
    subject: `${subject}`,
    text: `${message}`,
    // html: '<b>Hello world?</b>', // html body
  });
  console.log('Message sent: %s', info.messageId);

  res.send(info)
  } catch(err) {
    console.error(err)
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','..', 'build', 'index.html'));
});


app.listen(PORT, console.log(`Listening on ${PORT}`));

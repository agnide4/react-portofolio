const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require("path")
const cors = require('cors')

require('dotenv').config()




const app = express()
const PORT = process.env.PORT || 3001;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


// app.use(express.json());
// app.use(express.urlencoded({extended:true}))






app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  
  




app.get('/', () => {
  res.send('Hello World!')
})

app.post('/api/resume', (req, res) =>{
    console.log("here at 25")
    let data = req.body
    let smtpTransport = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                type: "OAuth2",
                clientId: process.env.clientId,
                clientSecret: process.env.clientSecret

        }
    })
    console.log(data.name)
    let mailOptions = {
        from: "Samir B <agnide4@gmail.com>",
        to: `${data.name} <${data.email}>`,
        subject: "Discover Samir",
        text: " Please find attached Samir resume that you requested. Thanks for your time and consideration",
        attachments: [{
            filename: "Samir`s Resume",
            path: path.join(__dirname, "./client/src/data/Images/Discover Samir.pdf"),
            contentType: 'application/pdf'
        }],
        auth:{
            user: process.env.user,
            refreshToken: process.env.refreshToken,
            accessToken: process.env.accessToken
        }
    }

    smtpTransport.sendMail(mailOptions, (err, res) =>{
        if(err){
            console.log("err", err)
            
        }else{
            console.log("email sent")
            res.send("success")
        }
    })

    smtpTransport.close()
})





app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
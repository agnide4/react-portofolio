const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const xoauth2 = require("xoauth2")


const app = express()
const PORT = process.env || 3001;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('api/resume', (req, res) =>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: "agnide4@gmail.com",
                clientId: "946363558550-0dn24617aqt8clc8t821t0i287vpdldu.apps.googleusercontent.com",
                clientSecret: "BaS5XmNX6Fx0fXwAi1Vcdhlh",
                refreshToken: "1//047s_bNl9ndALCgYIARAAGAQSNwF-L9IrKnM2Ve62av1kM4oBSRDVaCr4fPSO8L8uCSALHpubie7V5xTQhXWaA0q2ba2DdCbkrak"

            })

        }
    })

    let mailOptions = {
        from: "Samir B <agnide4@gmail.com>",
        to: `${data.name} <${data.email}>`,
        subject: "Discover Samir",
        text: " Please find attached Samir resume that you requested. Thanks for your time and consideration"
    }

    smtpTransport.sendMail(mailOptions, (err, res) =>{
        if(err){
            console.log("err")
            res.send(err)
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
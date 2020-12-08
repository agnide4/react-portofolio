const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require("path")
const cors = require('cors')
const ical = require('ical-generator')

require('dotenv').config()




const app = express()
const PORT = process.env.PORT || 3001;
const HOST = process.env.YOUR_HOST || '0.0.0.0'

app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.use(cors())

if (process.env.NODE_ENV === "production") {
    app.use("/react-portofolio/", express.static(path.join(__dirname, "client", "build")));
}








app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
  


// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
  




// app.get('/', () => {
//   res.send('Hello World!')
// })

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

    smtpTransport.sendMail(mailOptions, (err, response) =>{
        if(err){
            console.log("err", err)
            
        }else{
            console.log("email sent")
            res.send("success")
        }
    })

    smtpTransport.close()
})

app.post('/api/meeting', (req, res) =>{
    console.log("here at 89")
    let data = req.body
    console.log(data)
    let eventObj = {
        'start' : data.startDate,
        'end' : data.endDate,
        'Summary' : data.about,
        'organiser' : {'name' : data.name, 'email': data.email},
        'location' : data.location
    }
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

   let cal = ical()
   cal.name("Meeting")
   cal.domain("github.com/agnide4")
   cal.method("REQUEST")
   cal.url(eventObj.location)
   
   cal.createEvent({
       start: eventObj.start,
       end: eventObj.end,
       Summary: eventObj.Summary,
       location: eventObj.location,
       organizer: {
           name: eventObj.organiser.name,
           email: eventObj.organiser.email
       }
   })
   console.log(cal)
   let invite = cal.toString()
   console.log(invite)
    console.log(data.name)
    let mailOptions = {
        from: `${data.name} <${data.email}>`,
        to: 'Samir B <agnide4@gmail.com>',
        subject: `Meeting request from ${data.name}, ${data.phone}`,
        text: `Reason: ${data.about}\n
               Name: ${data.name} \n
               Email: ${data.email}`,
        icalEvent:{
            filename: "invite.ics",
            method: "request",
            content: invite
        },

        auth:{
            user: process.env.user,
            refreshToken: process.env.refreshToken,
            accessToken: process.env.accessToken
        }
    }

    smtpTransport.sendMail(mailOptions, (err, response) =>{
        if(err){
            console.log("err", err)
            
        }else{
            console.log("email sent")
            console.log(res)
            res.send("success")
        }
    })

    smtpTransport.close()
})




app.listen(PORT, HOST, () => {
  console.log(`Example app listening at http://${HOST}:${ PORT }/`)
})
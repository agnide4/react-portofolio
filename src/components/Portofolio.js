import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from  "../data/Images/Quiz.JPG"

console.log()

const activities = [

    {
        "Title": "Daily Planner App",
        "Description": "This App uses HTML, JQuery and CSS. Local Storage is also used to store user input",
        "ImgSrc": "../data/Images/Quiz.JPG",
        "Git Repo": "https://github.com/agnide4/dailyPlanner",
        "Deployed App": "https://agnide4.github.io/dailyPlanner/index.html",
        "Project": false
    },
    {
        "Title": "Password or Token Generator",
        "Description": "This app generates secure passwords or token based on your specifications. Tools used are HTML, CSS and Jquery",
        "ImgSrc": "/UT_Austin/src/data/Images/DayPlanner.jpg",
        "Git Repo": "https://github.com/agnide4/PwdGenerator",
        "Deployed App": "https://agnide4.github.io/PwdGenerator",
        "Project": false
    },
    {
        "Title": "Note Taker App",
        "Description": "App lets you keeps track of important notes so you can find them when you need it. Data is stored in a database using SQL",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/note-taker",
        "Deployed App": "https://cryptic-castle-84608.herokuapp.com",
        "Project": false
    },
    {
        "Title": "Weather app",
        "Description": "Find weatherforcast for any city around the world. Data is fetched from an Api call using Ajax. Jquery, CSS and HTML are also used",
        "ImgSrc": "",
        "Git Repo": "https://agnide4.github.io/weather-app",
        "Deployed App": "https://github.com/agnide4/weather-app",
        "Project": false
    },
    {
        "Title": "Quiz Taker",
        "Description": "Use this app to prepare fun quizzes for your classroom and display highest scores in the dashboard. HTML, CSS, Jquery and local storage are tools used for this app",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/quizredo",
        "Deployed App": "https://agnide4.github.io/quizredo/",
        "Project": false
    },
    {
        "Title": "SpringBoard",
        "Description": "This app lets you find event, restaurant and weather forecast in cities accross the US. Data is fected from an API using Ajax, then manipulated with Jquery. Local Storage helps keep track of cities you have searched",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/springboard-app",
        "Deployed App": "https://agnide4.github.io/springboard-app/",
        "Project": true
    },
    {
        "Title": "Eat da burger",
        "Description": "This is an Express and SQL app. It mimicks ordering and eating a burger",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/eatdaburger",
        "Deployed App": "https://burgersam.herokuapp.com/",
        "Project": false
    },
    {
        "Title": "POD APP",
        "Description": "Education platform where instructors update their content and allow student to watch video content posted by teachers, Project uses React, express, React-bootstrap, Redux, SQL and Bcrypt",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/POD_APP_v1",
        "Deployed App": "",
        "Type": true
    },
    {
        "Title": "Fitness Tracker",
        "Description": "Wanna Burn those Calories? Set your goals and track your milestones using the fitness tracker. Here we use Express, Node JS, MongoDB",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/fitness_tracker",
        "Deployed App": "https://murmuring-coast-22589.herokuapp.com/",
        "Type": false
    },
    {
        "Title": "Employee Directory",
        "Description": "This a basic employee directory created using React. Page load app 5 random users and you can search by name, and sort by age. Simple React app - Axios uses for API call",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/employee-directory",
        "Deployed App": "",
        "Type":""
    },
    {
        "Title": "Google books Seacrh",
        "Description": "This React based app can search the google books database. Node JS, Axios, MongoDb, React, Redux, React-bootStrap, google Books API",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/employee-directory",
        "Deployed App": "https://vast-garden-25520.herokuapp.com/",
        "Type":false

    },
    {
        "Title": "Employee Directory",
        "Description": "NOde JS based employee tracker. Express, SQL, Inquirer, Node and Jquery",
        "ImgSrc": "",
        "Git Repo": "https://github.com/agnide4/employee-tracker",
        "Deployed App": "",
        "Type": false
    }

]

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  



export default function Portofolio() {
    const classes = useStyles();



    return (

        <div>
            { activities.map((item, id) => (
                item.Type ? (
                        <Card className={classes.root} key={item.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image= {item.ImgSrc}
                                    title= {item.Title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.Title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.Description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" src={item["Git Repo"]} target="_blank">
                                  Git Repo
                                </Button>
                                <Button size="small" color="primary" src={item["Deployed App"]} target="_blank">
                                  Deployed app
                                </Button>
                            </CardActions>
                            </Card>
                    ) : (
                        <Card className={classes.root} key={item.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.ImgSrc}
                                    title= {item.Title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.Title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.Description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={item["Git Repo"]} target="_blank">
                                  Git Repo
                                </Button>
                                <Button size="small" color="primary" href={item["Deployed App"]} target="_blank">
                                  Deployed app
                                </Button>
                            </CardActions>
                            </Card>
                    )
            ))
            }
            
        </div>
    )
}

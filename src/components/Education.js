import React from 'react'
import data from "../data/certs.json"
import { CardContent, makeStyles, Typography } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { borders } from '@material-ui/system'
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box'
import richland from "../data/Images/Richland College.pdf"

import Grid from '@material-ui/core/Grid';

import { CreateRounded } from '@material-ui/icons';
import "../App.css"

const certs = data

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        borderSpacing: 10,
        borderColor: "black",
        height: 575,  
        backgroundColor: "lightblue",
        
        '&:hover': {
            backgroundColor:"#FFFF66",
            boxShadow: "10px 19px 15px lightgreen",
            raised: true
        }
        
        

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    text: {
       textAlign: "left",
       letterSpacing: "3px"
    },
    certs: {
        
        '&:hover': {
            cursor: "pointer",
            fontWeight: "bold",
        }
    }
    
    
  });


export default function Education() {
    const classes = useStyles()
    return (

        <div>
           
           <Grid container spacing={3} justify="space-evenly">
            <Grid item sm={4} xs={12}>
                <Card className={classes.root}>
                    <CardHeader title="SKILLS"/>
                    <CardContent>
                                <ul className={classes.text}>
                                    <li>Determined, focused and excellent listener</li>
                                    <li>Enthusiastic team player with strong analytical and problem-solving skills</li>
                                    <li>Excellent communication skills developed through years of team/customer interaction</li>
                                    <li>Excellent verbal and writing skills</li>
                                    <li>Ability to research, design, and write new documentation</li>
                                    <li>Working knowledge of Object oriented programming concepts</li>
                                    <li>AWS cloud practitioner </li>
                                </ul>              
                    </CardContent>
                </Card>
            </Grid>   
           <Grid item sm={4} xs={12}>
           <Card className={classes.root}>
               <CardHeader title="Proficiency"/>
               <CardContent>
                        <ul className={classes.text}>
                            <li>Strong knowledge of JavaScript and JQuery</li>
                            <li>Experience with server side scripting with Node JS</li>
                            <li>Experince with front end libraries such as React</li>
                            <li>Familiarity with Material-UI, react-bootstrap, bootstrap, CSS</li>
                            <li>Understanding of testing requirement and experience using JEST</li>
                            <li>Development experience with SQL and NoSQL Databases</li>
                            <li>Experience using source control management tools such as GIT </li>
                        </ul>              
               </CardContent>
           </Card>

           </Grid>
           <Grid item sm={4} xs={12}>
           <Card className={classes.root}>
               <CardHeader title="Education"/>
               <CardContent>
                        <ul className={classes.text}>
                            <li className={classes.certs}>Graduate of Coding BootCamp UT Austin October 2020</li>
                            <li className={classes.certs}>Student Pursuing Bachelor degree in Computer Science at UT Dallas</li>
                            <li className={classes.certs}>Associate degree in Computer Science (Richland College) May 2019</li>
                        </ul>              
               </CardContent>
           </Card>

           </Grid>
           
               
            
            
            </Grid>   
       
              
              
              
              
               
           
        </div>
    )
}

/* {
                   certs.map((cert, index) => (
                       cert.type != "Certifications" ? (
                                
                                <Card className ={classes.root} sm={4} xs={12}>
                                <CardHeader title={cert.type} />
                                {console.log(cert.proof)}
                                
                                <CardMedia src={"({cert.proof})"} className={classes.media}  />
                                </Card>

                          
                       ) : (

                           <h3>
                               {cert.type}
                           </h3>
                       )
                   ))
               }  */

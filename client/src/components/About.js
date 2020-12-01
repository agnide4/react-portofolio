import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      backgroundColor: "#b5dae9",
      marginTop: "17px",
      marginLeft:"7px"
    },
    text: {
        textAlign: "center",
        fontFamily: "Times New Roman, Times, serif",
        fontSize: "19px",
        lineHeight: "175%"
    }
  })); 


export default function About() {

    const classes = useStyles();



    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item sm={6}><h1>I'm Samir</h1>
                        <Paper xs={12}>  
                            <span className={classes.text}>
                        
                        <p >
                        .... and I would like to welcome to my page.
                        I am a junior full stack developper with an enthusiatic attitude towards new challenges.
                        I am looking forward to joining a team where knowledge is nurtured and
                        talent appreciated. 
                        </p>
                        <p>
                        Constantly learning new things keeps me enagged and I am hoping to take on the challenge
                        of finding inovative solutions for the many challenges mankind faces. 
                        </p>
                        <p>
                        As developers we have a lot to offer the world............ 
                        </p>
                        
                    </span>
                    </Paper>
                </Grid>
                <Grid item sm={6}><h1>Technologies I use</h1>
                    <Paper>
                    <p>Throughout my learning journey I have acquainted myself with many Technologies like
                     <h5>Javascript, HTML, Java, C++</h5>
                      When it comes to databases I can comfortably work in <h5>SQL(MySQL) and noSQL(MongoDb)</h5> databases and would love to learn new ones as well
                     Other technologies I use daily are <h5>CSS, JQuery, Node JS, React, redux, bootStrap, Material UI, GIT and github, express JS</h5>
                     I am also well versed in cloud technoligies(AWS) and continue to enrich my mind with technologies
                     while practicing the one I`ve already learned
                    </p>
                    </Paper>
                    
                </Grid>
            </Grid>
            
        </div>
    )



}

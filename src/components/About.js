import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Paper} from "@material-ui/core"




export default function About() {




    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={6}><Paper xs={12} >
                    
                    <h3>
                        <p>
                        I'm Samir and I would like to welcome to my page.
                        I am a junior full stack developper with an enthusiatic attitude towards new challenges.
                        I am looking forward to joining a team where knowledge is nurtured and
                        talent appreciated. 
                        </p>
                        <p>
                        Constantly learning new things keeps me alive and I am hoping to take on the challenge
                        of finding inovative solutions for the mainly challenges mankind faces. 
                        </p>
                        <p>
                        As developers we have a lot to offer the world............ 
                        </p>
                        
                    </h3>
                
                </Paper></Grid>
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

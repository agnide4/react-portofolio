import React from 'react'
import data from "../data/certs.json"
import { makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { CreateRounded } from '@material-ui/icons';


const certs = data

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderSpacing: 2
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
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
  });


export default function Education() {
    const classes = useStyles()
    return (
        <div>
               {
                   certs.map((cert, index) => (
                       cert.type != "Certifications" ? (
                                
                                <Card className ={classes.root} sm={4} xs={12}>
                                <CardHeader title={cert.type} />
                                {console.log(cert.proof)}
                                <CardMedia image={require ("../data/Images/640-contact.jpg")} className={classes.media} />
                                </Card>

                          
                       ) : (

                           <h3>
                               {cert.type}
                           </h3>
                       )
                   ))
               } 

           
        </div>
    )
}

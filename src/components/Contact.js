import React from 'react'
import { FormControl, Input, FormHelperText, InputLabel, Button, Hidden } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: "10px",
      marginTop: "15px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    date: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: "5px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    middle:{
        background:"lightgreen",
        border:"solid",
        borderColor:"black"
    }
  }));


function Contact() {
    const classes = useStyles();
    return (

        <div>
            <Grid container className={classes.root}>
            <Grid item xs={12} sm={5} style={{marginRight:"9px"}}>
            <h1>Request resume as a PDF sent to your email</h1>
                <form className={classes.form}>
                <FormControl>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Your name</FormHelperText>
                </FormControl>
                <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="email" />
                        <FormHelperText id="email">Email where you want the resume sent</FormHelperText>     
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="company">Your company name</InputLabel>
                        <Input id="company" aria-describedby="company-name" />
                        {/* <FormHelperText id="my-helper-text">Email where you want the resume sent</FormHelperText> */}
                </FormControl>
                
                <Button type="Submit" variant="outlined" style={{marginTop:"10px"}}>Am a button</Button>    
               </form>
            </Grid>
            <Hidden xsDown>
                    <Grid item sm={1} className={classes.middle}></Grid>
            </Hidden>
            
            <Grid item xs={12} sm={5} style={{marginLeft:"9px"}}>
                    <h1>Set up an appointment</h1>
                <form className={classes.form}>
                <FormControl>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Your name</FormHelperText>
                </FormControl>
                <FormControl>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input id="phone" aria-describedby="pnumber" />
                        <FormHelperText id="pnumber">Contact</FormHelperText>
                </FormControl>       
                <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Where can you be reached at?</FormHelperText>
                </FormControl>
                <TextField
                        id="datetime-local"
                        label="Choose date and time"
                        type="datetime-local"
                        defaultValue="today"
                        className={classes.date}
                        InputLabelProps={{
                        shrink: true,
                        }}
                />
                <FormControl>
                       <TextField htmlFor="about" multiline rows={3} variant="outlined">Leave a brief message</TextField>
                        <FormHelperText id="objective">What are your expectations from this meeting?</FormHelperText>
                </FormControl>


                <Button type="Submit" variant="outlined" style={{marginTop:"10px"}}>Am a button</Button>
               </form>
            </Grid>



            </Grid>
            
            
        </div>
    )
}

export default Contact

import React from 'react'
import { FormControl, Input, FormHelperText, InputLabel, Button, Hidden, FormGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"


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
    },
    mwarning:{
        color:"red",
        
    }
  }));


function Resume() {
    
    const classes = useStyles();
    return (

        <div>
            
            <h1>Request resume as a PDF sent to your email</h1>
                <Formik
                     initialValues={{
                         name: "hound",
                         email: "",
                         company: "",
                     }}
                     
                     validationSchema={Yup.object({
                         name: Yup.string()
                            .min(2, "Name must be at least 3 characters")
                            .max(15, "Max 15 characters permitted")
                            .required("This field is required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("This field is required"),
                        company: Yup.string()
                            .required("Field is required")
                            .max(15, "Max 15 characters permitted")

                      

                     })}
                     onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);

                    }}              
                     >
                
                {({values, errors}) => (
                <Form className={classes.form}>
                    
                             <FormGroup >
                                    <Field name="name" label="Name" as={TextField} />
                                    <ErrorMessage name="name">{ msg => <div className={classes.mwarning}>{msg}</div> }</ErrorMessage>
                             </FormGroup>
                             <FormGroup>
                                    <Field name="email" label="Email" as={TextField}/>
                                    {/* {touched.email && errors.email ? errors.email : null} */}
                <ErrorMessage name="email">{ msg => <div className={classes.mwarning}>{msg}</div>}</ErrorMessage>
                            </FormGroup>   
                            <FormGroup>
                                    <Field name="company" label="Company name"  as={TextField} />
                                    {/* {touched.company && errors.company ? errors.company : null} */}
                <ErrorMessage name="company">{ msg => <div className={classes.mwarning}>{msg}</div>}</ErrorMessage>
                            </FormGroup>
                            
                            <pre>{JSON.stringify(values, null, 4)}</pre>
                            <pre>{JSON.stringify(errors, null, 4)}</pre>
                     
                     <Button type="Submit"variant="outlined" style={{marginTop:"10px", color:"lightblue", backgroundColor:"#0047AB"}} >Am a button</Button>    
               </Form>            
            

                )}
               
        
        </Formik>
                
        </div>
    )
}

export default Resume

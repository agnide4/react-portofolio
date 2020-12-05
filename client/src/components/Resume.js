import React, {useState, useEffect} from 'react'
import { FormControl, Input, FormHelperText, InputLabel, Button, Hidden, FormGroup, Collapse } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios"
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
    
    const [msgStatus, setMsgStatus] = useState(false)
    const [noMsg, setnoMsg] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setMsgStatus(false)
        }, 1000);
        return () => clearTimeout(timer);
      }, [msgStatus]);

      useEffect(() => {
        const timer = setTimeout(() => {
          setnoMsg(false)
        }, 2000);
        return () => clearTimeout(timer);
      }, [noMsg]);


    const classes = useStyles();
    return (

        <div>
            
            <h3>Email resume as PDF</h3>
                <Formik
                     initialValues={{
                         name: "",
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
                     onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                          Axios.post("/api/resume", values)
                                .then((response) => {
                                       if(response.status === 200){
                                        setMsgStatus(true)
                                        resetForm({values:""})
                                       }
                                        
                                        
                                })
                                .catch(()=> {
                                    setnoMsg(true)
                                })
                        }, 400);
                        
                    }}              
                     >
                
                {({values, errors, isSubmitting}) => (
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
                            
                            {/* <pre>{JSON.stringify(values, null, 4)}</pre>
                            <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                    <Collapse in={msgStatus}>
                        <Alert severity="success" >Message Sent. Thanks for stopping by!</Alert>
                    </Collapse>
                    <Collapse in={noMsg}>
                        <Alert severity="error">We were unable to process your request. Please try again</Alert>
                    </Collapse>
                     
                     <Button type="Submit"variant="outlined" disabled={isSubmitting} style={{marginTop:"183px", color:"lightblue", backgroundColor:"#0047AB"}} >SUBMIT</Button>    
               </Form>            
            

                )}
               
        
        </Formik>
                
        </div>
    )
}

export default Resume

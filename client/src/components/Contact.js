import React, {useState, useEffect} from 'react'
import { FormControl, Input, FormHelperText, InputLabel, Button, Hidden, FormGroup, TextField, Collapse } from '@material-ui/core'
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardDateTimePicker } from "@material-ui/pickers"
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from "axios"
import * as Yup from "yup"
import MomentUtils from '@date-io/moment'


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
        textAlign: "right",
        fontStyle: "italic",
        fontSize: "9px"
        
    }

  }));
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const DatePickerField = ({ field, form, ...other }) => {
    const currentError = form.errors[field.name];
  
    return (
       <MuiPickersUtilsProvider utils={MomentUtils}>
             <KeyboardDateTimePicker
                    clearable
                    disablePast
                    name={field.name}
                    value={field.value}
                    format="ddd, MMMM Do YYYY, h:mm a"
                    helperText={currentError}
                    error={Boolean(currentError)}
                    onError={error => {
                    // handle as a side effect
                    if (error !== currentError) {
                        form.setFieldError(field.name, error);
                    }
                    }}
                    // if you are using custom validation schema you probably want to pass `true` as third argument
                    onChange={date => form.setFieldValue(field.name, date, true)}
                    {...other}
            />
       </MuiPickersUtilsProvider> 
     
    );
  };
  



  
function Contact() {

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
                    <h3>Request a meeting</h3>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        startDate: new Date(),
                        endDate: new Date(),
                        location: "",
                        about: ""

                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                           .min(2, "Name must be at least 3 characters")
                           .max(15, "Max 15 characters permitted")
                           .required("This field is required"),
                       email: Yup.string()
                           .email("Invalid email address")
                           .required("This field is required"),
                       phone: Yup.string()
                           .required("Field is required")
                           .matches(phoneRegExp, 'Phone number is not valid'),
                        location: Yup.string()
                           .required("Location is required"),
                        startDate: Yup.string().required()

                    })}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            Axios.post("/api/meeting", values)
                                .catch(()=> {
                                    setnoMsg(true)
                                })
                                .then(res => {
                                    if(res.status === 200){
                                        setMsgStatus(true)
                                        resetForm({values:""})
                                    }
                                    
                                })
                                
                        }, 400);
                        
                    }} 
                
                
                
                    >

                {({values, errors, isSubmitting}) => (
                    <Form className={classes.form}>
                        <FormGroup>
                            <Field name="name" label="Name" as={TextField} />
                            <ErrorMessage name="name">{ msg => <div className={classes.mwarning}>{msg}</div> }</ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Field name="email" label="email" as={TextField} />
                            <ErrorMessage name="email">{ msg => <div className={classes.mwarning}>{msg}</div> }</ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Field name="phone" label="Phone number" as={TextField} />
                            <ErrorMessage name="phone">{ msg => <div className={classes.mwarning}>{msg}</div> }</ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                        <Field component={DatePickerField}
                           
                            name="startDate"
                            
                            className={classes.date}
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Field component={DatePickerField}
                           
                            name="endDate"
                            
                            className={classes.date}
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        </FormGroup>
                        <FormGroup>
                            <Field name="location" as={TextField} label="Location" />
                            <ErrorMessage name="location">{ msg => <div className={classes.mwarning}>{msg}</div> }</ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Field name="about" as={TextField} multiline rows={3} variant="outlined" />
                        </FormGroup>
                        <Collapse in={msgStatus}>
                            <Alert severity="success" >Message Sent. Thanks for stopping by!</Alert>
                        </Collapse>
                        <Collapse in={noMsg}>
                            <Alert severity="error">We were unable to process your request. Please try again</Alert>
                        </Collapse>
                     
                        <Button type="Submit" variant="outlined" disabled={isSubmitting} style={{marginTop:"10px", color:"lightblue", backgroundColor:"#0047AB"}}>SUBMIT</Button>
                    </Form>
                    
                )}
                </Formik>
               

                
             
            
            
        </div>
    )
}

export default Contact

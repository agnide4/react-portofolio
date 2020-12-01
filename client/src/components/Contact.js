import React from 'react'
import { FormControl, Input, FormHelperText, InputLabel, Button, Hidden, FormGroup, TextField } from '@material-ui/core'
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
             <KeyboardDatePicker
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
    const classes = useStyles();
    return (

        <div>
                    <h1>Set up an appointment</h1>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        date: new Date()

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
                        date: Yup.string().required()

                    })}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                        resetForm({values:""})

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
                           
                            name="date"
                            
                            className={classes.date}
                            InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        </FormGroup>
                        <FormGroup>
                            <Field name="about" as={TextField} multiline rows={3} variant="outlined" />
                        </FormGroup>

                        <Button type="Submit" variant="outlined" disabled={isSubmitting} style={{marginTop:"10px", color:"lightblue", backgroundColor:"#0047AB"}}>Am a button</Button>
                    </Form>
                    
                )}
                </Formik>
               

                
             
            
            
        </div>
    )
}

export default Contact

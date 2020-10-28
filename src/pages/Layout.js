import React from 'react'
import {useSelector} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Vtab from '../components/Vtab';
import About from "../components/About"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

export default function Layout() {

    const [tabValue, error] = useSelector((gState) => [
        gState.tabValue,
        gState.error
    ])

    const classes = useStyles();
    





    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item container>
                        <Grid item sm={2}> <Vtab /></Grid>
                        <Grid item xs={12} sm={9}>
                            {tabValue === 0 ? (
                                <About />
                            ) : tabValue === 1 ? (
                                <h1>Portofolio</h1>
                            ) : (
                                <h3>Am good</h3>
                            )}
                        </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

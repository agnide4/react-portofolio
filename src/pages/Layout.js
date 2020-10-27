import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Vtab from '../components/Vtab';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

export default function Layout() {
    const classes = useStyles();





    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item container>
                        <Grid item sm={2}> <Vtab /></Grid>
                        <Grid item xs={12} sm={9}></Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

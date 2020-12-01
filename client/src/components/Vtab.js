import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getTabValue } from '../action';


const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          height: 224,
          
        },
        tabs: {
          borderRight: `1px solid ${theme.palette.divider}`,
          
        },
        tab: {
          // position: "fixed",
          // left: "100px"

        }
      }));

export default function Vtab() {
  const dispatch = useDispatch()

  const [tabValue, error] = useSelector((gState) => [
    gState.tabValue,
    gState.error
])

   
    const tabClick = (e, value) => {
        console.log(value)
        dispatch(getTabValue(value))
    }

  
    
    const classes = useStyles();

    return (

        <div>
            <Hidden xsDown>
              <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={tabValue}
                        onChange={tabClick}
                        className={classes.tabs}
                      >
                        
                            <Tab label="About Me"/>
                            <Tab label="Education"/>
                            <Tab label="Portofolio"/>
                            <Tab label="Reach out" />
                       
                        
                </Tabs>

            </Hidden>

                
            
        </div>
    )
}


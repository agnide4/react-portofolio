import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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

    
      const classes = useStyles();

    return (
        <div>
            <Hidden xsDown>

              <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        // value={value}
                        // onChange={handleChange}
                        className={classes.tabs}
                      >
                        <IconButton className={classes.tab}>
                            <Tab label="About Me"  />
                        </IconButton>
                        <IconButton>
                              <Tab label="Education" />
                        </IconButton>
                        <IconButton>
                              <Tab label="Portofolio" />
                        </IconButton>
                        <IconButton>
                              <Tab label="Reach out" />
                        </IconButton>
                        
                        
                        
                       
                        
                </Tabs>

            </Hidden>
                
            
        </div>
    )
}

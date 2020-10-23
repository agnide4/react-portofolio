import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));    


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Hidden smUp>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon  aria-haspopup="true" onClick={handleClick}/>
                        <Menu
                            id="profile-Menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                        <MenuItem onClick={handleClose}>About Me</MenuItem>
                        <MenuItem onClick={handleClose}>Education</MenuItem>
                        <MenuItem onClick={handleClose}>Portofolio</MenuItem>
                        </Menu>
                </IconButton>
          </Hidden>
           
        
          <Typography variant="h6" className={classes.title}>
            Discover me
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
    </div>
    )
}

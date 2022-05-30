import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Face';
import { MenuItem } from '@mui/material';


const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100%)`,
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

class TopMenu extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <AppBar position = 'fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Typography variant='h6' className={classes.title}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant='h6' className={classes.title}>
              About
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    );
  }
}

TopMenu.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(TopMenu);
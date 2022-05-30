import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  appBar: {
    width: `100%`,
    top: 'auto',
    bottom: 'fixed',
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
  },
}));

class Footer extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <AppBar position='fixed-bottom' className={classes.appBar} color='inherit'>
        <Typography align='center' variant='h6' className={classes.footer}>
         © Copyright 2022
       </Typography>
      </AppBar>
    );
  }
}

Footer.proptype={
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Footer);
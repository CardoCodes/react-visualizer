import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100%)`,
    marginLeft: 20,
    fontSize: 17,
    textAlign: 'center',
  },
}));

class Footer extends React.Component {
  redner() {
    const {classes} = this.props;

    return (
      <div>hello</div>
    );
  }
}

Footer.proptype={
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Footer);
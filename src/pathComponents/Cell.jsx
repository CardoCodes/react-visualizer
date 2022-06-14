import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    square: {
        background: '#fff',
        border: '100px solid rgb(0, 0, 0)}',
        float: 'left',
        height: '34px',
        marginRight: '1px',
        marginTop: '-1px',
        padding: '0',
        textAlign: 'center',
        width: '34px',
      } 

  }));

class Cell extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.square}>
            </div>

        );
    }
}

Cell.proptype={
    classes: PropTypes.object.isRequired,
  }
  

export default withStyles(useStyles)(Cell);
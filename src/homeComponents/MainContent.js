import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Cards from './Cards';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullSize}>
      <div className={classes.toolbar}/>
      <div className={classes.content} >
        <Cards />
      </div>
    </main>
  );
}

export default MainContent;
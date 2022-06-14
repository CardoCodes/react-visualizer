import React, { Component, Fragment } from 'react';

import TopMenu from '../homeComponents/TopMenu';
import Footer from '../homeComponents/Footer';
import MainContent from '../homeComponents/MainContent';


class Home extends Component{
  constructor() {
    super();
}
componentDidMount() {
    console.log(window.innerHeight,"  ",window.innerWidth);
}
  render(){
    return(
      <Fragment>
        <TopMenu/>
        <MainContent/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;

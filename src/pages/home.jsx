import React, { Component } from 'react';

import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';


class Home extends Component{
  constructor() {
    super();
}
componentDidMount() {
    console.log(window.innerHeight,"  ",window.innerWidth);
}
  render(){
    return(
      <React.Fragment>
        <TopMenu/>
      </React.Fragment>
    );
  }
}

export default Home;

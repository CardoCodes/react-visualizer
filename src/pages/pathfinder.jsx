import React, {Component, Fragment} from 'react';
import TopMenu from '../homeComponents/TopMenu';
import Footer from '../homeComponents/Footer';
import Grid from '../pathComponents/Grid';

class Pathfinder extends Component{
    constructor(){
        super();
    }
    componentDidMount() {
        console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render(){
        return(
            <Fragment>

                <Grid />
            </Fragment>
        );
    }
}

export default Pathfinder
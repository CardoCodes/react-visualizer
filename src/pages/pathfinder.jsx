import React, {Component, Fragment} from 'react';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
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
                <TopMenu>
                    <Footer/>
                </TopMenu>
            </Fragment>
        );
    }
}

export default Pathfinder
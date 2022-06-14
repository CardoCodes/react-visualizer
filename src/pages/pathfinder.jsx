import React, {Component, Fragment} from 'react';
import TopMenu from '../homeComponents/TopMenu';
import Footer from '../homeComponents/Footer';
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
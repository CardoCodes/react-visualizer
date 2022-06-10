import React from 'react';
import TextField from "@material-ui/core/TextField";
import CardInstructions from "./MediaCard";
import {CardInfo} from "./CardInfo";

class Cards extends React.Component{
    state = {
        cards: [],
        filter: "",
    }

    componentDidMount() {
        this.setState({cards:CardInfo()});
    }

    getData = (e) => {
        console.log(e.target.value);
        this.setState({filter:e.target.value});
    }

    render(){
        return(
            <React.Fragment>
                <div className="card-container">
                {
                       this.state.cards.filter((card) => card.title.toLowerCase().includes(this.state.filter.toLowerCase())||card.description.toLowerCase().includes(this.state.filter.toLowerCase())).map(card=>(
                           <div>
                               <CardInstructions
                                   className="d-flex flex-wrap"
                                   key={card.id}
                                   card={card}/>
                           </div>
                       ))
                   }
                </div>
            </React.Fragment>
        )
    }
}

export default Cards;
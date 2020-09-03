import React, {Component} from 'react';
import Ervaza from "./ervaza";
import MadreMiaRolls from "./madre-mia-rolls";
import Business from "../../business";

class Index extends Component {

    constructor(props, context) {
        super(props, context);
        let data = Business(this.props.match.params.id)
        document.body.style.backgroundColor = data.colors[0]
    }

    render() {
        switch (this.props.match.params.id){
            case 'ervaza':
                return <Ervaza properties={this.props}/>;
            case 'madremiarolls':
                return <MadreMiaRolls properties={this.props}/>;
        }
    }
}



export default Index;
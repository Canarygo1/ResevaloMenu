import React, {Component} from 'react';
import Ervaza from "./ervaza";
import MadreMiaRolls from "./madre-mia-rolls";
import Business from "../../business";
import Privilege from "./privilege";

class Index extends Component {

    constructor(props, context) {
        super(props, context);
        let data = Business(this.props.match.params.id)
        document.body.style.background = data.colors[0]
        document.body.style.minHeight = "100vh"
    }

    render() {
        switch (this.props.match.params.id){
            case 'ervaza':
                return <Ervaza properties={this.props}/>;
            case 'madremiarolls':
                return <MadreMiaRolls properties={this.props}/>;
            case 'privilege':
                return <Privilege properties={this.props}/>;
        }
    }
}



export default Index;
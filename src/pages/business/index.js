import React, {Component} from 'react';
import Ervaza from "./ervaza";
import MadreMiaRolls from "./madre-mia-rolls";

class Index extends Component {

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
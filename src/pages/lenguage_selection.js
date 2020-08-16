import React, {Component} from "react";
import './lenguage-selection.css';
import LogoImage from  '../components/atoms/logo-image.js';

class LenguageSelection extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="main-div" id="main-div">
                <LogoImage url='/Group1.png'
                           className="logo-image"
                           margin={20}
                           size={40}
                           onClick={() => {
                               console.log("hola")}}></LogoImage>
                <h1>{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default LenguageSelection;

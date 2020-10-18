import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

DownBarLogos.propTypes = {
    urls: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired
};

let posibilityIcons = [faFacebook, faInstagram, faGoogle]
let posibilityUrls = ['facebook-url', 'instagram-url','web-url'];
let posibilityClassNames = ['', 'instagram', 'google'];

function checkUrls(element, props){
    if(props.urls[element][posibilityUrls[element]].length !== 0){
        return (
            <FontAwesomeIcon icon={posibilityIcons[element]} className={`fa-2x mx-2 ${posibilityClassNames[element]}`}
                             style={{color:"#3b5998"}}
                             onClick={() =>{
                                 window.open(props.urls[element][posibilityUrls[element]], '_blank');}
                             }/>
        );
    }
}

function DownBarLogos(props) {
    console.log(props.colors[0]["body"]);
    var color = props.colors[0]["body"].includes("url") ? "#2C2D2F" : props.colors[0].body;
    return (
        <div className="modal-footer fixed-bottom justify-content-center" style={{backgroundColor: `${color}`}}>
            {checkUrls(0, props)}
            {checkUrls(1, props)}
            {checkUrls(2, props)}
            <Image src={'/images/reservalo/logoReservaloCircle.png'} fluid={true}
                   className="logo-image-circle"
                   onClick={() =>{
                       window.open('https://www.reservalo.app/', '_blank');}
                   }
            />
        </div>
    );
}

export default DownBarLogos;
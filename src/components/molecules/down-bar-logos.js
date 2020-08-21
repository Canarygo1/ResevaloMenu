import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

DownBarLogos.propTypes = {
    urls: PropTypes.array.isRequired
};

function DownBarLogos(props) {
    return (
        <div className="modal-footer justify-content-center mx-4 mt-4">
            <FontAwesomeIcon icon={faFacebook} className="fa-2x mx-2" style={{color:"#3b5998"}}
                             onClick={() =>{
                                 window.open(props.urls[0], '_blank');}
                             }/>
            <FontAwesomeIcon icon={faInstagram} className="fa-2x mx-2 instagram"
                             onClick={() =>{
                                 window.open(props.urls[1], '_blank');}
                             }/>
            <FontAwesomeIcon icon={faGoogle} className="fa-2x mx-2 google"
                             onClick={() =>{
                                 window.open(props.urls[2], '_blank');}
                             }/>
            <Image src={'/logoReservaloCircle.png'} fluid={true}
                   className="logo-image-circle"
                   onClick={() =>{
                       window.open('https://www.reservalo.app/', '_blank');}
                   }
            />
        </div>
    );
}

export default DownBarLogos;
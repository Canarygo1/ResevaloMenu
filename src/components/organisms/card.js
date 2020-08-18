import React from 'react';
import Image from "react-bootstrap/Image";
import DropDownFlag from "../molecules/drop-down-flag";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductData from "../molecules/product-data";
import PropTypes from "prop-types";

function Card(props) {
    let code = parseInt(props.codeDefault);
    return (
        <div className={"container"}>
            <div style={{marginBottom:100}}>
                <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container">
                        <Image src={'/Group1.png'}
                               fluid
                               style={{width:40,height:40}}
                               className={"logo-image"}
                               onClick={() =>{
                                   window.open('https://www.reservalo.app/', '_blank');
                               }}/>
                        <DropDownFlag codeDefault={code}/>
                    </div>
                </nav>
            </div>
            <Row>
                <Col>
                    <ProductData firstCase={6} secondCase={9} thirdCase={2} fourCase={4}/>
                </Col>
            </Row>
        </div>
    );
}

Card.propTypes = {
    codeDefault:PropTypes.string.isRequired,
};

export default Card;
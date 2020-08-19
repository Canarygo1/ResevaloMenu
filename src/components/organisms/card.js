import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductData from "../molecules/product-data";
import PropTypes from "prop-types";
import NavReservalo from "./nav-reservalo";

function Card(props) {
    let code = parseInt(props.codeDefault);
    return (
        <div className={"container"}>
            <NavReservalo code={code} id={props.id}/>
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
    id:PropTypes.string.isRequired,
};

export default Card;
import React from 'react';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DropDownFlag from "../molecules/drop-down-flag";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

NavReservalo.propTypes = {
    code:PropTypes.number.isRequired,
    id:PropTypes.string.isRequired
};

function NavReservalo(props) {
    return (
        <div>
            <Row className="justify-content-center my-4 w-100" sm={1} lg={2} md={2} xl={2} xs={1}>
                <Col className="text-lg-left text-sm-center text-md-left text-xl-left text-center mb-sm-2 mb-2">
                    <Image src={'/logoReservaloLetter.png'} fluid={true}
                           style={{width:40, height:40}}
                           className={'logo-image'}
                           onClick={() =>{
                               window.open('https://www.reservalo.app/', '_blank');}
                           }
                    />
                </Col>
                <Col className="text-lg-right text-sm-center text-md-right text-xl-right text-center">
                    <DropDownFlag codeDefault={props.code} id={props.id}/>
                </Col>
            </Row>
        </div>
    );
}

export default NavReservalo;
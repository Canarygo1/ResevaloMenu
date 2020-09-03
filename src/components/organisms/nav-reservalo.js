import React from 'react';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DropDownFlag from "../molecules/drop-down-flag";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

NavReservalo.propTypes = {
    code: PropTypes.number,
    id: PropTypes.string,
    multiLenguage: PropTypes.bool.isRequired,
};

function controlMultiLenguage(props) {
    if (props.multiLenguage === true) {
        return (
            <Col className="text-lg-right text-sm-center text-md-right text-xl-right text-center">
                <DropDownFlag codeDefault={props.code} id={props.id}/>
            </Col>
        );
    }
}

function multiLogo(props) {
    try {
        let image = require("./../../../public/images/" + props.id + "/logo.png")
        return <Col>
            <div className='text-md-left text-center'>
                <Image src={'/images/reservalo/logoReservaloLetter.png'} fluid={true}
                       style={{width: 40, height: 40}}
                       className='logo-image mx-md-2 mx-5'
                       onClick={() => {
                           window.open('https://www.reservalo.app/', '_blank');
                       }
                       }
                />
                <img src={`/images/${props.id}/logo.png`}
                     style={{width: 40, height: 40}}
                     className={'logo-image mx-md-2 mx-5'}
                />
            </div>
        </Col>;
    } catch (e) {
        console.log('adios')
        return <Col className="text-lg-left text-sm-center text-md-left text-xl-left text-center mb-sm-2 mb-2">
            <Image src={'/images/reservalo/logoReservaloLetter.png'} fluid={true}
                   style={{width: 40, height: 40}}
                   className={'logo-image'}
                   onClick={() => {
                       window.open('https://www.reservalo.app/', '_blank');
                   }
                   }
            />
        </Col>

    }
}

function NavReservalo(props) {
    return (
        <div>
            <Row className="my-4 justify-content-md-left" sm={1} lg={2} md={2} xl={2} xs={1}>
                {multiLogo(props)}
                {controlMultiLenguage(props)}
            </Row>
        </div>
    );
}

export default NavReservalo;
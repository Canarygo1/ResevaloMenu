import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";
import 'flag-icon-css/css/flag-icon.css';

class LenguageSelection extends Component {
    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <Image src={'/images/reservalo/logoReservaloLetter.png'} fluid={true}
                           style={{width:40, height:40}}
                           className={'logo-image'}
                           onClick={() =>{
                               window.open('https://www.reservalo.app/', '_blank');}
                           }
                    />
                </div>
                <Col>
                    <Row className="justify-content-center" sm={1} lg={5} md={5} xl={5} xs={1}>
                        <Link to={`/cartas/${this.props.match.params.id}/0`} className="my-3">
                            <span className="flag-icon flag-icon-es"></span>
                        </Link>
                        <Link to={`/cartas/${this.props.match.params.id}/1`} className="my-3">
                            <span className="flag-icon flag-icon-fr"></span>
                        </Link>
                        <Link to={`/cartas/${this.props.match.params.id}/2`} className="my-3">
                            <span className="flag-icon flag-icon-gb"></span>
                        </Link>
                        <Link to={`/cartas/${this.props.match.params.id}/3`} className="my-3">
                            <span className="flag-icon flag-icon-it"></span>
                        </Link>
                        <Link to={`/cartas/${this.props.match.params.id}/4`} className="my-3">
                            <span className="flag-icon flag-icon-de"></span>
                        </Link>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default LenguageSelection;

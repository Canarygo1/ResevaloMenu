import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Flag from "react-world-flags";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class LenguageSelection extends Component {

    nextPage(code){
        let idBussines = this.props.match.path.split("/")[2];
        window.location.href=`/cartas/${idBussines}/${code}`
    }

    render() {
        return (
            <div className="container">
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
                        </div>
                    </nav>
                </div>
                <Col>
                    <Row className=" justify-content-center" sm={1} lg={5} md={5} xl={5} xs={1}>
                        <Flag className="col" code="es" height={100} onClick={() => this.nextPage(0)}/>
                        <Flag className="col" code="fr" height={100} onClick={() => this.nextPage(1)}/>
                        <Flag className="col" code="gb" height={100} onClick={() => this.nextPage(2)}/>
                        <Flag className="col" code="it" height={100} onClick={() => this.nextPage(3)}/>
                        <Flag className="col" code="de" height={100} onClick={() => this.nextPage(4)}/>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default LenguageSelection;

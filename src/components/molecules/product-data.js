import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StorieComponent from "../atoms/stories-component";
import InfoText from "../atoms/info-text";

function ProductData(props) {

    return (
        <div>
            <Row>
                <Col>
                    <InfoText firstCase={6} secondCase={9} thirdCase={2} fourCase={4}/>
                </Col>
                <Col>
                    <StorieComponent imagesUrls={["/PRUEBA1.png", "/PRUEBA2.png"]}/>
                </Col>
            </Row>
        </div>
    );
}

export default ProductData;
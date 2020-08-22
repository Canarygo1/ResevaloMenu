import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormattedMessage} from "react-intl";
import StorieComponent from "../atoms/stories-component";

TableContents.propTypes = {
    id:PropTypes.string.isRequired,
    codeDefault:PropTypes.string.isRequired,
};

function TableContents(props) {

    let imagesUrls1 = ["/images/ervaza/ceviche.jpeg",
        "/images/ervaza/pulpo a la gallega.jpeg",
        "/images/ervaza/tartarAtun.jpeg",];
    let imagesUrls2 = ["/images/ervaza/mariscada.jpeg",
        "/images/ervaza/gambas.jpeg"];

    function createRowWithPrice(number, element) {
        let elementRows = [];
        for (let i = 1; i <= number; i++) {
            elementRows.push(
                <Row>
                    <Col xs="8" lg="8" md="8" className="ml-3">
                        <span className="main-inCard">
                            <FormattedMessage id={`${element}.${i}`} defaultMessage={""}/>
                        </span>
                    </Col>
                    <Col xs="1" lg="1" md="1">
                        <span className={"price-card"}>
                            <FormattedMessage id={`${element}.price.${i}`}
                            defaultMessage={""}/>
                        </span>
                    </Col>
                </Row>
            )
        }
        return elementRows;
    }

    return (
        <div>
            <Row>
                <Col xs="8" lg="8" md="8" className="ml-2">
                    <h3 className="title">
                        <FormattedMessage
                            id="started"
                            defaultMessage={""}/>
                    </h3>
                </Col>
                <Col xs="1" lg="1" md="1">
                    <StorieComponent id={props.id} codeDefault={props.codeDefault} imagesUrls={imagesUrls1}/>
                </Col>
            </Row>
            {createRowWithPrice(6, "started")}
            <Row className="mt-3">
                <Col xs="8" lg="8" md="8" className="ml-2">
                    <h3 className="title">
                        <FormattedMessage
                            id="plate"
                            defaultMessage={""}/>
                    </h3>
                </Col>
                <Col xs="1" lg="1" md="1">
                    <StorieComponent id={props.id} codeDefault={props.codeDefault} imagesUrls={imagesUrls2}/>
                </Col>
            </Row>
            {createRowWithPrice(9, "plate")}
            <Row className="mt-3">
                <Col xs="8" lg="8" md="8" className="ml-2">
                    <h3 className="title">
                        <FormattedMessage
                            id="combo"
                            defaultMessage={""}/>
                    </h3>
                </Col>
            </Row>
            {createRowWithPrice(2, "combo")}
            <Row className="mt-3">
                <Col xs="8" lg="8" md="8" className="ml-2">
                    <h3 className="title">
                        <FormattedMessage
                            id="drink"
                            defaultMessage={""}/>
                    </h3>
                </Col>
            </Row>
            <span className="sub-title ml-3">
                <FormattedMessage
                    id="drink.wine"
                    defaultMessage={""}/>
            </span>
            {createRowWithPrice(6, "drink.wine")}
            <span className="sub-title ml-3">
                <FormattedMessage
                    id="drink.cava"
                    defaultMessage={""}/>
            </span>
            {createRowWithPrice(3, "drink.cava")}
        </div>
    );
}

export default TableContents;
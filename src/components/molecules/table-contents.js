import React from "react";
import PropTypes, {element} from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormattedMessage} from "react-intl";
import StorieComponent from "../atoms/stories-component";

TableContents.propTypes = {
    id: PropTypes.string.isRequired,
    codeDefault: PropTypes.string.isRequired,
    dataBusiness: PropTypes.object.isRequired,
};

function TableContents(props) {

    function createRowWithPrice(number, element) {
        let elementRows = [];
        let elementData = ''
        if (element["subtitle"] === true) {
            elementData = element['type-sub']
        } else {
            elementData = element['type']
        }
        for (let i = 1; i <= number; i++) {
            elementRows.push(
                <Row>
                    <Col xs="8" lg="8" md="8" className="ml-3">
                        <span className="main-inCard">
                            <FormattedMessage id={`${elementData}.${i}`} defaultMessage={""}/>
                        </span>
                    </Col>
                    <Col xs="1" lg="1" md="1">
                        <span className={"price-card"}>
                            <FormattedMessage id={`${elementData}.price.${i}`}
                                              defaultMessage={""}/>
                        </span>
                    </Col>
                </Row>
            )
        }
        return elementRows;
    }

    function createSubtitle(isSubtitle, subtitle) {
        if (isSubtitle === true) {
            return <span className="sub-title ml-3">
                <FormattedMessage
                    id={subtitle}
                    defaultMessage={""}/>
            </span>
        }
    }

    function createImages(imagesUrls, imagePreview) {
        let correct = false;
        if (window.innerWidth > 750 && typeof imagesUrls != 'undefined') {
            console.log(imagesUrls);
            for (let i = 0; i < imagesUrls.length; i++) {
                if (imagesUrls[i].includes('.jpeg')) {
                    correct = true;
                    break
                }
            }
        }else{
            correct = true;
        }
        if (typeof imagesUrls != 'undefined' && correct === true) {
            return <StorieComponent id={props.id} codeDefault={props.codeDefault} imagesUrls={imagesUrls}
                                    imagePreview={imagePreview}/>
        } else {
            return <div></div>
        }
    }

    function createData() {
        let elements = []
        for (let i = 0; i < props.dataBusiness["product-types"].length; i++) {
            elements.push(
                <div>
                    <Row>
                        <Col xs="8" lg="8" md="8" className="ml-2">
                            <h3 className="title">
                                <FormattedMessage
                                    id={props.dataBusiness["product-types"][i]["type"]}
                                    defaultMessage={""}/>
                            </h3>
                        </Col>
                        <Col xs="1" lg="1" md="1">
                            {createImages(props.dataBusiness["images-urls"][0][`type-${i + 1}`], props.dataBusiness["images-preview"][0][`type-${i + 1}`])}
                        </Col>
                    </Row>
                    {createSubtitle(props.dataBusiness["product-types"][i]["subtitle"], props.dataBusiness["product-types"][i]["type-sub"])}
                    {createRowWithPrice(props.dataBusiness["product-types"][i]["number"], props.dataBusiness["product-types"][i])}
                </div>
            )
        }
        return elements
    }

    return (
        <div>
            {createData()}
        </div>
    );
}

export default TableContents;
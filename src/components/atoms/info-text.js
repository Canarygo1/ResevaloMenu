import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormattedMessage} from "react-intl";

InfoText.propTypes = {
    firstCase:PropTypes.number.isRequired,
    secondCase:PropTypes.number.isRequired,
    thirdCase:PropTypes.number.isRequired,
    fourCase:PropTypes.number.isRequired,
};

function InfoText(props) {

    function createRowWithPrice(number, element) {
        let elementRows = [];
        for (let i = 1; i <= number; i++) {
            elementRows.push(
                <Row>
                    <Col>
                        <span className="main-inCard">
                            <FormattedMessage id={`${element}.${i}`} defaultMessage={""}/>
                        </span>
                    </Col>
                    <Col>
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
            <h3 style={{color:"#0090FF"}}>
                <FormattedMessage
                    id="started"
                    defaultMessage={""}/>
            </h3>
            {createRowWithPrice(props.firstCase, "started")}
            <h3 className="tittle">
                <FormattedMessage
                    id="plate"
                    defaultMessage={""}/>
            </h3>
            {createRowWithPrice(props.secondCase, "plate")}
            <h3 className="tittle">
                <FormattedMessage
                    id="combo"
                    defaultMessage={""}/>
            </h3>
            {createRowWithPrice(props.thirdCase, "combo")}
            <h3 className="tittle">
                <FormattedMessage
                    id="drink"
                    defaultMessage={""}/>
            </h3>
            {createRowWithPrice(props.fourCase, "drink")}
        </div>
    );
}

export default InfoText;
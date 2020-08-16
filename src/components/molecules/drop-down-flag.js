import React from 'react';
import PropTypes from "prop-types";
import LogoImage from "../atoms/logo-image";
import Flag from "react-flags";
import Dropdown from "react-bootstrap";

function DropDownFlag({bgcolor}) {
    return (
        <div>
            <Dropdown style={{backgroundColor:bgcolor}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Flag
                name="CAN"
                format="png"
                pngSize={64}
                shiny={true}
                alt="Canada Flag"
            />
        </div>
    );
}

LogoImage.propTypes = {
    url:PropTypes.string.isRequired,
    size:PropTypes.number.isRequired,
    onClick:PropTypes.func,
    className:PropTypes.string,
    margin:PropTypes.number,
};

export default DropDownFlag;

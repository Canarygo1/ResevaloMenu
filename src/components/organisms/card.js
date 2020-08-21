import React from 'react';
import PropTypes from "prop-types";
import NavReservalo from "./nav-reservalo";
import TableContents from "../molecules/table-contents";

function Card(props) {
    let code = parseInt(props.codeDefault);
    return (
        <div className={"container"}>
            <NavReservalo code={code} id={props.id}/>
            <TableContents id={props.id} codeDefault={props.codeDefault}/>
        </div>
    );
}

Card.propTypes = {
    codeDefault:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
};

export default Card;
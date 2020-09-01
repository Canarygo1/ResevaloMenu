import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

StorieComponent.propTypes = {
    id:PropTypes.string.isRequired,
    codeDefault:PropTypes.string.isRequired,
    imagesUrls:PropTypes.array.isRequired,
    imagePreview:PropTypes.string.isRequired
};

function StorieComponent(props) {

    return (
        <div>
            <Link to={{
                pathname: `/cartas/${props.id}/${props.codeDefault}/stories`,
                state: {
                    imagesUrls: props.imagesUrls
                }
            }}>
                <Image className="rounded-circle circle-image-storie" src={props.imagePreview}/>
            </Link>
        </div>
    );
}

export default StorieComponent;
import React from 'react';
import PropTypes from 'prop-types';
import Image from "react-bootstrap/Image";

function LogoImage({url,size,onClick,className,margin}){
    return (
        <Image src={url} fluid style={{width:size,height:size,margin:margin}} className={className} onClick={onClick}/>
    );
}

LogoImage.propTypes = {
    url:PropTypes.string.isRequired,
    size:PropTypes.number.isRequired,
    onClick:PropTypes.func,
    className:PropTypes.string,
    margin:PropTypes.number,
};

export default LogoImage;
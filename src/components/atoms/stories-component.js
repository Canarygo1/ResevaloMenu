import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

StorieComponent.propTypes = {
    id:PropTypes.string.isRequired,
    codeDefault:PropTypes.string.isRequired,
};

/*
Crear un array con los dos elementos para la imagen el circulo y las historias
crear una funcion que cambie el widget en funcion del elemento que esta seleccionado de circulo
    a historias y las historias cuando terminen a circulo de nuevo.
Colocar el circulo y las historias en columna junto con los titulos de menu { recordar que si no utilizo posiciones
    absolutas la separacion entre las filas aumentara debido al tamaño que ocupa lo de las historias}
 */

function StorieComponent(props) {

    return (
        <div>
            <Link to={`/cartas/${props.id}/${props.codeDefault}/stories`}>
                <Image className="rounded-circle circle-image-storie" src="/Prueba1.png"/>
            </Link>
        </div>
    );
}

export default StorieComponent;
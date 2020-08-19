import React, {useState} from "react";
import PropTypes from "prop-types";
import Stories from "react-insta-stories";
import Image from "react-bootstrap/Image";

StorieComponent.propTypes = {
    imagesUrls:PropTypes.array.isRequired,
};

/*
Crear un array con los dos elementos para la imagen el circulo y las historias
crear una funcion que cambie el widget en funcion del elemento que esta seleccionado de circulo
    a historias y las historias cuando terminen a circulo de nuevo.
Colocar el circulo y las historias en columna junto con los titulos de menu { recordar que si no utilizo posiciones
    absolutas la separacion entre las filas aumentara debido al tamaño que ocupa lo de las historias}
 */

function StorieComponent(props) {
    function initialWidget() {
        return <Image className="rounded-circle circle-image-storie" src="/Prueba1.png"
        onClick={() => updateWidget(widget = <Stories
            stories={stories2}
            defaultInterval={1500}
            width={200}
            height={400}
            />)
        }/>
    }
    let [widget, updateWidget] = useState(initialWidget());
    let [stories2]= useState(createPictures());
    function createPictures() {
        let objectStories = [];
        props.imagesUrls.forEach((element) =>{
            objectStories.push(
                {
                    content: props => {
                        return <div>
                            <img className={"insta-image"} src={element}/>
                        </div>
                    }
                }
            );
        })
        return objectStories;
    }
    return (
        <div>
            {widget}
        </div>
    );
}

export default StorieComponent;
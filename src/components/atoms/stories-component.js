import React, {useState} from "react";
import PropTypes from "prop-types";
import Stories from "react-insta-stories";

StorieComponent.propTypes = {
    imagesUrls:PropTypes.array.isRequired,
};

function StorieComponent(props) {

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
            <Stories
                stories={stories2}
                defaultInterval={1500}
                width={300}
                height={500}
            />
        </div>
    );
}

export default StorieComponent;
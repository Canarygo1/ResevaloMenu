import React, {Component} from 'react';
import Stories from "react-insta-stories";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

let imagesUrls = [];
class StoriesScreen extends Component {

    constructor(props, context) {
        super(props, context);
        imagesUrls = props.location.state.imagesUrls
        console.log(imagesUrls)
    }

    render() {
        function createPicturesToMobile() {
            let objectStories = [];
            imagesUrls.forEach((element) => {
                objectStories.push(
                    {
                        content: props => {
                            return <div>
                                <Image className="w-100 h-100" src={element}/>
                            </div>
                        }
                    }
                );
            })
            return objectStories;
        }

        function createPicturesToPC(){
            let objectStories = [];
            imagesUrls.forEach((element) => {
                objectStories.push(
                    {
                        original: element,
                        thumbnail: element,
                    }
                );
            })
            return objectStories;
        }

        if (window.innerWidth > 800) {
            return (
                <div className="container mt-2">
                    <ImageGallery items={createPicturesToPC()} showBullets={true} autoPlay={true}/>;
                </div>
            );
        } else {
            return (
                <div>
                    <Stories
                        stories={createPicturesToMobile()}
                        defaultInterval={2500}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                    <div className="close-stories" onClick={() => this.props.history.goBack()}>
                        <FontAwesomeIcon icon={faTimes} className={"close-icon"}/>
                    </div>
                </div>
            );
        }

    }
}

export default StoriesScreen;
import React, {Component} from 'react';
import Stories from "react-insta-stories";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class StoriesScreen extends Component {

    render() {
        function createPictures() {
            let objectStories = [];
            ["/test01.jpg", "/PRUEBA2.png"].forEach((element) =>{
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

        if(window.innerWidth > 800){
            return (
                <div className="container">
                    <ImageGallery items={images} />;
                </div>
            );
        }else{
            return (
                <div>
                    <div className="close-stories" onClick={() => this.props.history.goBack()}>
                        <FontAwesomeIcon icon={faTimes} className={"close-icon"}/>
                    </div>
                    <Stories
                        stories={createPictures()}
                        defaultInterval={1500}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                </div>
            );
        }

    }
}

export default StoriesScreen;
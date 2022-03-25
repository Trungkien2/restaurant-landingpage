import React from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";

import { SubHeading, MenuItem } from "../../components";
import "./Gallery.scss";

const Gallery = () => {

  const galleryRef = React.useRef(null);

  const galerryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];
  console.log(galerryImages);

  const scroll= (direction)=>{
    const {current} = galleryRef;

    if(direction==='left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    }
  }
  return (
    <div className="gallery flex__center">
      <div className="gallery__content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>


      <div className="gallery__img">
        <div className="gallery__img-container" ref={galleryRef}>
            {galerryImages.map((img,index)=>(
              <div className="gallery__img-card flex__center" key={index}>
                <img src={img} alt="galle-img" />
                <BsInstagram className="gallery__img-icons"/>
              </div>
            ))}
        </div>
      <div className="gallery__img-arrow">
        <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')}/>
      </div>
      </div>

    </div>
  );
};

export default Gallery;

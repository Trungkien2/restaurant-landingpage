import React from "react";

import { images } from "../../constants";
import "./AboutUs.scss";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="section">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>

    <div className="aboutus-content flex__center">
      <div className="aboutus-content__about">
        <h1 className="headtext__cormorant">About US</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="aboutus-content__knife flex__center">
        <img src={images.knife} alt="knife img" />
      </div>

      <div className="aboutus-content__history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

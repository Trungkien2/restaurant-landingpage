import React from "react";

import { images, data } from "../../constants";

import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.scss";

const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding">
    <div className="specialMenu__title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="specialMenu__menu">
      <div className="specialMenu__menu-wine flex__center">
        <p className="specialMenu__menu-heading">Wine And Beer</p>
        <div className="specialMenu__menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title = {wine.title} tags = {wine.tags} price={wine.price}/>
          ))}
        </div>
      </div>

      <div className="specialMenu__menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="specialMenu__menu-cocktails flex__center">
        <p className="specialMenu__menu-heading">Cocktails</p>
        <div className="specialMenu__menu-items">
          {data.cocktails.map((cocktail, index) => (
           <MenuItem key={index} title = {cocktail.title} tags = {cocktail.tags} price= {cocktail.price}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop: '15px'}}>
    <button type="button" className="custom__button">View more</button>
    </div>
  </div>
);

export default SpecialMenu;

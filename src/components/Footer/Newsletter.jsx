import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => (
  <div className='newletter'>
   <div className="newletter-heading">
   <SubHeading title='Newletter'/>
   <h1 className="headtext__cormorant">Subcribe to Our Newsletter</h1>
   <p className="p__opensans">And never miss update</p>
   </div>

   <div className="newletter-input flex__center">
     <input type="email"  placeholder='enter your email address'/>
     <button className='custom__button'> Subcribe</button>
   </div>
  </div>
);

export default Newsletter;

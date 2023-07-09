import React from 'react';
import CardLibrary from 'card-sky';
import './App.css'
 
function Apps() {
  return (
    <div> 
      <marquee  direction="right"><h1 >Library Example</h1></marquee>
    <CardLibrary cardBg="yellow" city="Delhi"/>
    </div>
  );
}

export default Apps;

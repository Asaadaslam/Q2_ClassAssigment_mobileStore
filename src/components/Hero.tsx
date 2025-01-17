"use client"
import React from 'react'

import Slider from "react-slick";
import Slide from './slide';

const Hero = () => {

  var settings = {
    dots : true,
    infinite : true,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
  
  };
  const slideData = [
    {
    id : 0,
    img: "/banner 1.png", 
    title: "",
    mainTitle: "",
    price: "$100"
  
  },
  
  {
  id : 1,
  img: "/banner 2.png",
  title: "",
  mainTitle: "",
  price: "$200"
  
  },
  
  {
  id : 2,
  img: "/banner 3.png",
  title: "",
  mainTitle: "",
  price: "$300"
  
  },
   ]
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
            key={item.id}
            img= {item.img}
            title = {item.title}
            mainTitle = {item.mainTitle}
            price = {item.price}
            />
          ))}
        </Slider>
      </div>
    </div> 
  );
};

export default Hero;
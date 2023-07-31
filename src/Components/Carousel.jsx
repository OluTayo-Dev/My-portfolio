// import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quote from "../assets/quote.png";
import cart from "../assets/cart.png";

export default function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="carousel bg-slate-300 w-full">
      <h2 className="text-center text-blue-950 text-4xl font-bold pt-6">Projects</h2>
      <Slider {...settings}>

       <div className="box">
        <img src={quote} alt="" className="" /> 
        <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>
       </div>

       <div className="box">
        <img src={cart} alt="" className="" />
        <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">This is a cart shopping list. This project was designed to help consumers and sellers in calculating the items purchased. This project takes an input of items, prices and gives the total. It was built with React Js <br /> <a href="#"></a>https://github/OluTayo/ShoppingList</p>
           </div>
        </div>
        
       </div>

       <div className="box">
        <img src={quote} alt="" className="" /> 
        <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>

       </div>

       <div className="box">
       <img src={quote} alt="" className="" /> 
       <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>
       </div>

       <div className="box">
       <img src={quote} alt="" className="" /> 
       <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>
       </div>

       <div className="box">
       <img src={quote} alt="" className="" /> 
       <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>
       </div>

       <div className="box">
       <img src={quote} alt="" className="" />
       <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">This is a quote generator app which aim to brings inspire quotes and author for educational, motivational and intellectual purposes. It was built with React Js <br /><a href="#">https://github/OluTayo-Dev/Quotegeneration</a></p>
           </div>
        </div> 
       </div>

       <div className="box">
       <img src={quote} alt="" className="" /> 
       <div className="image_overlay image_overlay--primary">
           <div className="image_title">
            <p className="image_description">Here we have a brick wall</p>
           </div>
        </div>
       </div>

      </Slider>

    </div>
  )
}

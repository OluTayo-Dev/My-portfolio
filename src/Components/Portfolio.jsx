//import React from 'react'
import Header from "./Header";
import Prof from '../assets/Prof.png';
import Icon from '../assets/Icon.png';
import Nogb1 from '../assets/Nobg1.png';
import Nogb2M from '../assets/Nobg2M.png';
import NogbN from '../assets/NobgN.png';
import fb from '../assets/fb.png';
import tweet from '../assets/tweet.png';
import insta from '../assets/insta.png';
// import contact from '../asset/contact.png';
// import Email from '../asset/Email.png';
// import AWS from '../asset/AWS.png';
// import Decagon from '../asset/Decagon.png';
// import github from '../asset/github.png';
// import SUA from '../asset/SUA.png';
// import replit from '../asset/replit.png';
// import alx from '../asset/alx.png';
// import HackerRankBG from '../asset/HackerRankBG.png';
// import cart from '../asset/cart.png';
// import carousel from '../asset/carousel.png';
// import accordion from '../asset/accordion.png';
// import quote from '../asset/quote.png';
// import Phone from '../asset/Phone.png';
import Carousel from "./Carousel";
import "../App.css";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <section className="background-image">
        <div className="flex flex-col md:flex-row items-center px-6 mx-auto md:space-y-0">
          <h1 className="max-w-2xl pt-[10rem] text-white text-4xl font-bold text-center md:text-5xl md:text-left">Hello, My name is Olaseinde Olusola Temitayo. I,m a software developer, Writer and Instructor</h1>
        </div>

      </section>

      <section className="bg-slate-300  w-full">
        <div className="flex flex-col space-y-12 md:flex-row items:center px-6 mx-auto md:space-y-0">
          <div className="flex flex-col space-y-12 md:w1/2">
            <h2 className="text-2xl font-bold md:text-4xl text-center pt-10 text-blue-950">About</h2>
            <p className="max-w-2xl text-center text-blue-950  md:text-left text-xl pt-[2rem]">My name is Olaseinde Olusola Temitayo, I am a Software Developer, Software Engineer
              Writer and Instructor.I am  passionate about building innovative creative codebased web and mobile application using stack such as HTML, CSS, Javascript,Jquery, Github, React, React Native, Next Js, Express JS, Node Js PostgresSql and MongoDB. I am always eager to learn new elvolving technologies and working with group of developers around me to collaboratively solve problems. I am an analytic thinker and I possess a possibility mindset. As a result of this, solving real life problem is
              my ultimate priority.
            </p>

          </div>
          <div className="w-1/2 items-center md:place-items-end">
          <img src={Prof} alt="" className="w-[100vw] ml-[70px]" />

        </div>

        </div>

        <div className="flex flex-col items-center">
           <h2 className="text-2xl font-bold md:text-4xl text-center  text-blue-950 pt-8">Stacks</h2>
              <span className="flex md:gap-12 mt-12">
                  <img src={NogbN} alt="" className="w-[6rem]" />
                  <img src={Nogb1} alt="" className="w-[6rem]" />
                   <img src={Nogb2M} alt="" className="w-[6rem]"/>
                    <img src={Icon} alt="" className="w-[6rem]"/>
               </span>

        </div>

      
      </section>

      <section>
        <Carousel />
      </section>

      <footer className="bg-blue-950">
        <div className="flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>

            <div className="flex justify-center space-x-4">
                  <a href="#"><img src={fb} alt="" className="" />

                  </a>

                  <a href="#"><img src={tweet} alt="" className="" />

                  </a>

                  <a href="#"><img src={insta} alt="" className="" />

                  </a>
            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className=" hover:text-gray-500">Home</a>
              <a href="#" className=" hover:text-gray-500">About</a>
              <a href="#" className=" hover:text-gray-500">Stacks</a>
              <a href="#" className=" hover:text-gray-500">Projects</a>
              <a href="#" className=" hover:text-gray-500">Contact</a>
            </div>

            <div className="flex flex-col space-y-3 text-white">
            <a href="#" className=" hover:text-gray-500">MongoDB</a>
            <a href="#" className=" hover:text-gray-500">Express</a>
            <a href="#" className=" hover:text-gray-500">React</a>
            <a href="#" className=" hover:text-gray-500">NodeJs</a>
            <a href="#" className=" hover:text-gray-500">Next Js</a>
            </div>

            <div className="flex flex-col  text-white">
                 <h1>Contact</h1>
                 <p>+234706421944</p>
                 <p>olusolatemitayo656@gmail.com</p>
                 
            </div>


          </div>

          <div className="flex flex-col justify-between">
              <form>
                <div className="flex space-x-3">
                  <input type="text" placeholder="Enter text here" className="flex-1 px-4 rounded-full focus:outline-none" />
                  <button className="px-6 py-2 text-white hover:bg-black rounded-full bg-gray-500 focus:outline-none">submit</button>

                </div>
              </form>
              <div className="hidden text-white md:block">
                Copyright &copy; All Rights Reserved
              </div>
          </div>

        </div>

      </footer>
    </div>
  )
}

'use client';

import React, {useState} from "react"
import Carousel from "react-multi-carousel";
import HeroImg from "/public/Image8.png";
import Image from "next/image";
import "./carousel.css"

import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const CarouselDiv =()=>{

 const {deviceType,setDeviceType} = useState("mobile")
 
    return(
        <div style={{paddingTop:"60px"}}>
                 <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div >
     <div className="section1">
       <Image
              src={HeroImg}
              alt="Hero Screens"
             
              className="sectionImg"
              
            />
            <div  className="NewArrivalD">
        <div  className="NewArrivalD1">New Arrivals</div>
        <p  className="NewArrivalD2">Be the first to experience our latest digital products</p>
        <div  className="NewArrivalD3">Explore</div>
        </div>
     </div>
  </div>
  <div >
  <div  className="section1">
     <Image
              src={HeroImg}
              alt="Hero Screens"
           
              className="sectionImg"
              
            />
      <div   className="NewArrivalD">
        <div  className="NewArrivalD1">New Arrivals</div>
        <p  className="NewArrivalD2">Be the first to experience our latest digital products</p>
        <div  className="NewArrivalD3"><button>Explore</button></div>
        </div>
  </div>
  </div>
  <div >
  <div  className="section1">
     <Image
              src={HeroImg}
              alt="Hero Screens"
            
             
              className="sectionImg"
              
            />
           <div className="NewArrivalD">
        <div  className="NewArrivalD1">New Arrivals</div>
        <p  className="NewArrivalD2">Be the first to experience our latest digital products</p>
        <div  className="NewArrivalD3"><button>Explore</button></div>
        </div>
  </div>
  </div>
  <div >
  <div  className="section1">
     <Image
              src={HeroImg}
              alt="Hero Screens"
             
              className="sectionImg"
              
            />
            
        <div className="NewArrivalD">
        <div  className="NewArrivalD1">New Arrivals</div>
        <p  className="NewArrivalD2">Be the first to experience our latest digital products</p>
        <div  className="NewArrivalD3"><button>Explore</button></div>
        </div>
  </div>
  </div>
</Carousel>


        </div>
    )
}


export default CarouselDiv;
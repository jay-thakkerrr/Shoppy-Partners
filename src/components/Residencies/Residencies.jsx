import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import {PuffLoader} from 'react-spinners'

const Residencies = () => {

  const {isError, isLoading} = useProperties()

  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }
let data = [
{
  id:1,
  image :"./alpha-one-mall.webp",
  description:"Alpha Moll"
},
{
  id:2,
  image :"./iscon-mega-mall.webp",
  description:"Iskon Mega Moll"
},
{
  id:3,
  image :"./gulmohar-park-mall.webp",
  description:"Gulmohar Park Moll"
},
{
  id:4,
  image :"./cover-1200x895-crop (1).webp",
  description:"Palladium Moll"
},
]
  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Lifestyle Hub</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
     
    </div>
  );
};

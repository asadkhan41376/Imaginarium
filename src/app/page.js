
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@/components/ui/button"
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from 'next/navigation';






const SwierData = [
  {
    Image1: "/SlideImg/bird.jpg",
    Image2: "/SlideImg/plane.jpg",

  },

  {
    Image1: "/SlideImg/blueWhale.jpg",
    Image2: "/SlideImg/sumrin.webp",

  },

  {
    Image1: "/SlideImg/termite.jpg",
    Image2: "/SlideImg/termite2.jpg",

  }, {
    Image1: "/SlideImg/mosquito.jpg",
    Image2: "/SlideImg/closeup-syringe.jpg",

  },
]

export default function Home() {
  const MySwipe = useRef()
  const [isLastSlide, setIsLastSlide] = useState(false);
  const router = useRouter()

  // for handleClick Swiper Button Manual
  const handleClick = () => {

    if(!isLastSlide){

      MySwipe.current?.slideNext();
    }
    else{
router.push("/YouDidGreat")
    }
  }

  return (
    <>
      <Swiper
      onSlideChange={(swiper)=>{
       setIsLastSlide(swiper.activeIndex == SwierData.length - 1)
      }}
        onSwiper={(swipe) => {
          MySwipe.current = swipe;
        }}
        modules={[Navigation]}
      allowTouchMove={false}

      >

        {
          SwierData.map((item, index) => (
            <SwiperSlide className='relative' key={index}>


              {/* YE APNA CONTAINT SLIDE KA  */}

              <div className='h-screen w-full flex  justify-around items-center '>
                <div className='bg-[#79DAFF] h-full w-full flex items-center justify-center'>
                  <div className='imageFirst w-[500px] h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black'>
                    <Image src={item.Image1} layout='fill' objectFit='cover' alt='image' />
                  </div>
                </div>
                <div className="bg-[#99A1B3] h-full w-full flex items-center justify-center ">
                  <div className='imageSecound w-[500px] h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black'>
                    <Image src={item.Image2} layout='fill' objectFit='cover' alt='image' />

                  </div>
                </div>


              </div>

              {/* YE APNA BTN   */}
              <div className="absolute top-0 flex justify-between items-center w-full flex-col h-full py-10 pt-8">
                <div >
                  <h1 className='text-3xl font-bold'>Imaginarium</h1>
                  <h1 className='text-xl  text-center'>Sub Title</h1>
                </div>

                <div className='relative myBtn '>

                  <Button variant="outline" onClick={handleClick} className="bg-black  text-white  hover:bg-transparent   h-[40px] py-2 px-8 btn " >Next <MdDoubleArrow /></Button>
                </div>
              </div>

            </SwiperSlide>
          ))
        }



      </Swiper>

    </>


  );
}


"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@/components/ui/button"
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";



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



  // for handleClick Swiper Button Manual
  const handleClick = () => {
    MySwipe.current?.slideNext();
  }

  return (
    <>
      <Swiper
        onSwiper={(swipe) => {
          MySwipe.current = swipe;

        }}
        modules={[Navigation]}
      
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


                <Button variant="outline" onClick={handleClick} >Button</Button>
              </div>

            </SwiperSlide>
          ))
        }



      </Swiper>

    </>


  );
}

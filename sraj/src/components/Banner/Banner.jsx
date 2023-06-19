import React, { useState } from 'react'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'

import { Box, Typography, useScrollTrigger } from '@mui/material'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

function Banner() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 5 ? 0 : (next) => next+1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev-1)
        
    }
    const data = [
        slider1, slider2, slider3, slider4
    ]
    return (
        <div className='h-[100vh] overflow-x-hidden w-100'>
            <div className='w-screen h-[650] relative'>
                <div className='w-[400vw] h-full flex transition-transform duration-1000' style={{
                    transform: `translateX(-${currentSlide * 100}vw)`
                }}>
                    <img 
                        className='object-cover w-screen h-full' 
                        src={data[0]} 
                        alt='Image 1' 
                        loading='priority'
                    />
                    <img 
                        className='object-cover w-screen h-full' 
                        src={data[1]} 
                        alt='Image 2'
                    />
                    <img 
                        className='object-cover w-screen h-full' 
                        src={data[2]} 
                        alt='Image 3'
                    />
                    <img 
                        className='object-cover w-screen h-full' 
                        src={data[3]} 
                        alt='Image 4'
                    />
                </div>
                <div className='absolute left-0 right-0 flex justify-between mx-auto w-100 ' style={{
                    bottom:'400px',
                    marginRight:'15px',
                }}>
                    <div className='h-12 w-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 
                    hover:text-white active:bg-gray-900 duration-300' onClick={prevSlide}>
                        <HiArrowLeft size={20}/>
                    </div>
                    <div className='h-12 w-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700
                    hover:text-white active:bg-gray-900 duration-300'>
                        <HiArrowRight size={20} onClick={nextSlide}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
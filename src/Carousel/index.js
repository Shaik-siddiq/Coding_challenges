import React from 'react'
import ImageSlider from './ImageSlider'

const Carousel = () => {
    const slides =[
        {url:"http://localhost:3000/images/image-1.jpg", title:"itachi-child"},
        {url:"http://localhost:3000/images/image-2.jpg", title:"itachi"},
        {url:"http://localhost:3000/images/image-3.jpg", title:"luffykid"},
        {url:"http://localhost:3000/images/image-4.jpg", title:"ace"},
        {url:"http://localhost:3000/images/image-5.jpg", title:"luffy-brothers"},
        {url:"http://localhost:3000/images/image-6.jpg", title:"crossover"},
    ]
    const containerStyles ={
         width:"1000px",
         height:"580px",
         margin:"0 auto"
    }
  return (
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
    </div>
  )
}

export default Carousel
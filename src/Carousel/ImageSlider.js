import React,{useState} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderStyles = {
        height:"100%",
        position:"relative"
    }
    const slideStyles = {
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currentIndex].url})`,
    }
    const leftArrowStyles ={
       position:"absolute",
       top:"50%",
       transform:"translate(0, -50%)",
       left:"32px",
       fontSize:"45px",
       color:"#fff",
       zIndex:1,
       cursor:"pointer"
    }
    const rightArrowStyles ={
        position:"absolute",
        top:"50%",
        transform:"translate(0, -50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
     }
     const dotsContainerStyles = {
        display:"flex",
        justifyContent:"center",
     }
     const dotStyles = {
        margin:"0 3px",
        cursour:"pointer",
        fontSize:"30px"

     }
     const goToPrevious = () =>{
        const firstSlideIndex = currentIndex === 0;
        const newslide = firstSlideIndex? slides.length-1: currentIndex-1
        setCurrentIndex(newslide)
     }
     const goToNext = () =>{
        const lastSlideIndex = currentIndex === slides.length -1;
        const newslide = lastSlideIndex? 0 : currentIndex+1
        setCurrentIndex(newslide);
     }
     const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
     }
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}> {"<"} </div>
        <div style={rightArrowStyles} onClick={goToNext}> {">"} </div>
        <div style={slideStyles}>
        </div>
        <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex)=>(
                <div style={dotStyles} key={slideIndex} onClick={()=>goToSlide(slideIndex)}>⚫</div>
            ))}
            </div>
    </div>
  )
}

export default ImageSlider
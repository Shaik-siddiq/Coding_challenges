import React,{useState} from 'react'
import "./StarRating.css"
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return(
        <div className="star-display">
{[...Array(5)].map((star, index)=>{
    index +=1
    console.log(index)
        return (
            <div>
                <button className={index <= (hover || rating)? "on":"off"} 
                key={index}
                onClick={()=>setRating(index)}
                onMouseEnter={()=>setHover(index)}
                onMouseLeave={()=>setHover(rating)}
                onDoubleClick={()=>{
                    index -=1
                    setRating(index)
                    setHover(0)
                    if(index < 1){
                        setRating(0)
                    }
                }}
                >
                <span className="star">&#9733;</span>
                 </button>
            </div>
          )
    })}
    </div>
    )
}

export default StarRating
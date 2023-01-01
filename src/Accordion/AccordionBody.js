import React,{useState} from 'react'
import "./Accordion.css"
const AccordionBody = ({title, content}) => {
    const [isActive, setIsActive]=useState(false)
  return (
        <div className="accordion-item" onClick={()=>setIsActive(!isActive)}>
            <div className='accordion-title'>{title}</div>
            <div className='accordion-expand'>{isActive?"-":"+"}</div>
            {isActive &&<div className="accordion-content">{content}</div>}
        </div>
   
  )
}

export default AccordionBody;
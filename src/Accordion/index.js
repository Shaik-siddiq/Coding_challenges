import React from 'react'
import AccordionBody from './AccordionBody'
import accordionData from './AccordionData'
import "./Accordion.css"
const Accordion = () => {
  return (
    <>
    React Accordion Demo
    <div className="accordion-main">
 {accordionData.map(({title, content})=>(
  <AccordionBody title={title} content={content} />
 ))}
    </div>
    </>
  )
}

export default Accordion
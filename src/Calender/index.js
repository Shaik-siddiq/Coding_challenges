import React, {useState} from 'react'
import CalenderData from './CalenderData'
import { MocKEvents } from './Constansts'

const Calender = () => {
    const [events, setEvents] = useState(MocKEvents);
    const AddEvents = (date, color)=>{
      const text = window.prompt("text");
      setEvents(prev => [...prev, {date, title:text, color}])
    }
  return (
    <div>{<CalenderData startingDate={new Date()} eventsSec = {events} OnAddEvents={AddEvents} />}</div>
  )
}

export default Calender
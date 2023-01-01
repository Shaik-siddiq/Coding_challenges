import React,{useState} from 'react'
import {Wrapper, 
    CalenderHead,
     HeadDay,
     SevencolGrid, 
     CalenderBody, 
     StyledDay,
      StyledEvent } from "./Styled"
import {days, months} from "./Constansts";
import {Range, 
    getDaysInMonth,
    nextMonth,
    prevMonth,
    getMonthYear,
    getSortedDate, 
    getSortedDays,
     areDatesSame,
      getDateObj,
     getRandomDarkColor} from "./Utils"

const CalenderData = ({eventsSec, OnAddEvents}) => {
const [currentDate, setCurrentDate] = useState(new Date( ))
/* const [
    currentMonth,
     setCurrentMonth
    ] = useState(startingDate.getMonth());

const [
    currentYear,
     setCurrentYear
    ] = useState(startingDate.getFullYear()); */
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const DaysInMonth = getDaysInMonth(currentDate)

/* const nextMonth = () =>{
    if(currentMonth < 11){
        setCurrentMonth(prev => prev + 1);
    }else{
        setCurrentMonth(0)
        setCurrentYear(prev => prev + 1)
    }
}
const prevMonth = () =>{
    if(currentMonth > 0){
        setCurrentMonth(prev =>  prev - 1);
    }else{
        setCurrentMonth(11);
        setCurrentYear(prev => prev -1)
    }
} */

const OnEventAdd = (date)=>{
    OnAddEvents(date, getRandomDarkColor())
}
return (
    <>
    <Wrapper>
        <CalenderHead>
        <ion-icon onClick={()=>prevMonth(currentDate, setCurrentDate)} name="arrow-back-circle-outline"></ion-icon>
        <p>{getMonthYear(currentDate)}</p>
        <ion-icon onClick={()=>nextMonth(currentDate, setCurrentDate)} name="arrow-forward-circle-outline"></ion-icon>
        </CalenderHead>
        <SevencolGrid>
            {days.map((day)=>(
                <HeadDay>{day}</HeadDay>
                ))}
        </SevencolGrid>
            <CalenderBody fourCol={DaysInMonth=== 28}>
              {getSortedDate(new Date(), currentMonth, currentYear).map((date)=>(
               <StyledDay 
               onClick={()=>OnEventAdd( getDateObj(date, currentMonth, currentYear))}
               active = {areDatesSame(new Date(), getDateObj(date, currentMonth, currentYear))}
               > 
               <p>{date}</p>
               {eventsSec.map((eve)=> areDatesSame(
                getDateObj(date, currentMonth, currentYear), eve.date
               ) && <StyledEvent>{eve.title}</StyledEvent>)}
               
               </StyledDay>
              ))}
            </CalenderBody>

    </Wrapper>
    </>
  )
}

export default CalenderData
import { days } from "./Constansts";

export const Range = (end) =>{
    const {result} = Array.from({length:end}).reduce(({result, current})=>({
       result: [...result, current],
       current : current + 1,
    }), {result: [], current: 1}) 
    return result;
}

export const getDaysInMonth = (date)=>{
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export const getSortedDays = (month, year) =>{
    const dayIndex = new Date(year, month, 1).getDay()
    return [...days.slice(dayIndex), ...days.slice(0, dayIndex)]
}

export const getDateObj = (day, month, year) =>{
    return new Date(year, month, day);
}

export const areDatesSame = (first, second) =>{
    return(
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    )
}

export const getRandomDarkColor = () =>{
    let color = "#";
    for(let i=0; i<6; i++){
        color = Math.floor(Math.random()*10);
    }
    return color
}

export const getSortedDate = (date) =>{
    const DaysInMonth = Range(getDaysInMonth(date))
    const Index = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return [...Array(Index === 0 ? 6: Index - 1), ...DaysInMonth]
}

export const nextMonth = (date, cb) =>{
const mon = date.getMonth();
if(mon < 11){
    date.setMonth(mon + 1);
}else{
    date.setMonth(0)
    date.setFullYear(date.getFullYear() + 1);
}
cb(new Date(date))
}

export const prevMonth = (date, cb) =>{
const month = date.getMonth();
if(month > 0){
    date.setMonth(month - 1)
}else{
    date.setMonth(11)
    date.setFullYear(date.getFullYear()-1)
}
 cb(new Date(date))
}

export const getMonthYear = (date) =>{
    const d = date.toDateString().split(" ");
    return`${d[1]} ${d[3]}`
}
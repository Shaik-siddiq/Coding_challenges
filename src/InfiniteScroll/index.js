import React,{useState, useEffect} from 'react'
import "./InfiniteScroll.css"
const PAGE_NUMBER = 1
const InfiniteScroll = () => {
  const [result, setResult] = useState([])
  const [page, setPage] = useState(PAGE_NUMBER)

  const FetchData = () =>{
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=7`)
    .then(res=>res.json())
    //the olddata we added here is to store the old data, as befeore adding old data while scrolling the old data vanishes
    .then(da=>setResult(olddata =>[ ...olddata, ...da.data]));
  }
  const handleScroll = (e)=>{
  console.log("hi")
  console.log("scrollTop",e.target.documentElement.scrollTop);
  console.log("innerHeight",window.innerHeight);
  console.log("scrollHeight", e.target.documentElement.scrollHeight);
  if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
    console.log("At the bottom")
    setPage(page + 1)
  }
  }
  useEffect(()=>{
    FetchData();
  window.addEventListener("scroll", handleScroll)
  },[page])
  /* window.scroll = function(){
    if(window.innerHeight + document.documentElement.scrollTop
       === document.documentElement.offsetHeight){
      setPage(page + 1)
    }
  } */
  console.log(result);
    console.log(result?.length)
    console.log(page)
  return (
    <div className='main'>
      {result.length > 0 && result.map((item, el)=>(
      <div key={el} className='container'>
       <h4>{item._id}</h4>
       <h4>{item.name}</h4>
       <h4>{item.trips}</h4>
        </div>
        )
      )}
    </div>
  )
}

export default InfiniteScroll
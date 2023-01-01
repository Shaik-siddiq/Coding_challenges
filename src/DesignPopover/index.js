import React,{useState, useEffect} from 'react'
import Popup from './Popup'

const DesignPopover = () => {

    const [buttontrigger, setButtonTrigger] = useState(false)
    const [timetrigger, setTimeTrigger] = useState(false)
 // in useEffect if we wont place empty array then useEffect will render continuously
    useEffect(()=>{
        setTimeout(()=>{
          setTimeTrigger(true)
        },3000)
    },[])
  return (
    <div>
        <main>
            <h1>React PopOver</h1>
            <br /> <br />
            <button onClick={()=>setButtonTrigger(true)}>Open Popover</button>
        </main>
        <Popup trigger={buttontrigger} setTrigger={setButtonTrigger}>
            <h1>My Popup</h1>
            <p>This is tirggered button</p>
        </Popup>
        <Popup trigger={timetrigger} setTrigger={setTimeTrigger}>
            <h1>My time Popup</h1>
            <p>This popup only shows first time in 3sec</p>
        </Popup>
    </div>
  )
}

export default DesignPopover
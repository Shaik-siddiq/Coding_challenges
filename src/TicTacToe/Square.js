import React from 'react'

const Square = (props) => {
  return (
    <div style={{
        border:"1px solid black",
        height:"100px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }} className="square" onClick={props.HandleGame}>
        <h4>{props.toe}</h4>
    </div>
  )
}

export default Square
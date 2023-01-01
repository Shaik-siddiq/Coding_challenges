import React,{useState} from 'react'
import Square from './Square'

const Board = () => {
    const[isXturn, setIsXturn]=useState(false);
    const [tic, setTic]= useState(Array(9).fill(null));
    
    const CheckWinner= ()=>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let logic of winnerLogic){
            const [a, b, c] = logic
            if(tic[a] !==null &&tic[a]=== tic[b] && tic[a]=== tic[c])
            //return true
            return tic[a]
        }
        return false
    }
    
    const isWinner = CheckWinner();

    const HandleGame = (index)=>{
        //for not to change the value is already present in square
        if(tic[index] !==null){
            return;
        }
     const oldData = [...tic];
     oldData[index]=isXturn?"X":"O"
     setTic(oldData);
     setIsXturn(!isXturn)
    }
  return (
    <div className='board'>
        {isWinner? <>{isWinner} is  won 
        <button onClick={()=>setTic(Array(9).fill(null))}>Play Again</button>
        </>:
        <>
        <h4>{isXturn?`Now its X turn`:`Now its O turn`}</h4>
        <div className="board-row">
            <Square HandleGame={()=>HandleGame(0)} toe={tic[0]} />
            <Square HandleGame={()=>HandleGame(1)} toe={tic[1]} />
            <Square HandleGame={()=>HandleGame(2)} toe={tic[2]} />
        </div>
        <div className="board-row">
        <Square HandleGame={()=>HandleGame(3)} toe={tic[3]} />
        <Square HandleGame={()=>HandleGame(4)} toe={tic[4]}/>
        <Square HandleGame={()=>HandleGame(5)} toe={tic[5]}/>
        </div>
        <div className="board-row">
        <Square HandleGame={()=>HandleGame(6)} toe={tic[6]}/>
        <Square HandleGame={()=>HandleGame(7)} toe={tic[7]}/>
        <Square HandleGame={()=>HandleGame(8)} toe={tic[8]}/>
        </div>
        </>}
    </div>
  )
}

export default Board
import React,{useEffect, useState} from 'react'
import useDebounce from './useDebounce'
const Debounce = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [poke, setPoke] = useState([])
    const debounceSearch = useDebounce(searchTerm, 300)
    
    useEffect(()=>{
       if(debounceSearch){
        PokemonHandler(debounceSearch)
       }
    },[debounceSearch])

    const PokemonHandler = (pokemonsearch)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsearch}`)
        .then(res=>res.json())
        .then(data=> setPoke(data))
        console.log(poke)
    }
  return (
    <div>
        <input type="text" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />  
        {poke.length > 0 && poke.map((item, ind)=>(
           <div key={ind}>{item.name}</div>
        ))}
    </div>
  )
}

export default Debounce
import {useState, useEffect} from 'react'

const useDebounce = (value, delay) => {
    const [debouncevalue, setDebounceValue ] = useState("")
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return clearTimeout(handler)

    },[value, delay])

    return debouncevalue
}

export default useDebounce
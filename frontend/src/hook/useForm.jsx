import { useState } from "react";

function useForm(){
    const [value, setValue]=useState()
    const change=(e)=>{
        setValue({...value,
        [e.target.name]:e.target.value,
        })   
    }
    return [value, change]
}
export default useForm
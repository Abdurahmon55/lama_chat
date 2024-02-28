import { useState } from "react";

function useToggol(){
    const [toggol, setToggol]=useState(false)

    const Toggol=()=>{
        setToggol(!toggol)
    }

    return [toggol, Toggol]
}

export default useToggol
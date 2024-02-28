import { useState } from "react";

function useData(){
    const [data, setData]=useState(null)

    const getData=(name)=>{
        setData({ ...data, ...name})
    }
    return [data, getData]
}

export default useData

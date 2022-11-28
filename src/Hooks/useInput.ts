import { useState } from "react"

const useInput = (initialValue:any, isCheckBox=false)=>{
    const [value,setValue] = useState(initialValue)

    const onChange = (event:any)=>{
        if(isCheckBox){
            setValue(event.target.checked)
        }else{
            setValue(event.target.value)
        }
    }

    return {
        value,
        onChange
    }
}

export default useInput
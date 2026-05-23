import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input 
        className=" border border-blue-800 h-9 rounded-md outline-none px-2 mb-3 " 
        {...props}
        />
    )
}
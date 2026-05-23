import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { useState, type FormEvent } from "react"

import { LuChartGantt  } from "react-icons/lu";
import bg_2 from '../../images/bg-2.jpg'

import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"

export function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(email === "" || password === ""){
            alert("Preencha todos os campos")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/admin", {replace: true})
        })
        .catch((error) => {
            console.log("ERRO AO FAZER LOGIN")
            console.log(error)
        })
    }

    return(
        <div className="flex flex-row w-full h-screen items-center justify-center overflow-hidden">

            <img 
                src={bg_2}
                alt="Foto de fundo" 
                className="w-1/2 h-screen object-cover"
                />
            
            <div className="flex w-1/2 h-screen items-center justify-center flex-col">
            <Link to="/" className="flex items-center gap-3">
                <LuChartGantt className="size-13 mt-2.5" />
                <h1 className="mt-11 text-black mb-7 font-bold text-5xl">Dev
                    <span className="text-blue-900" >Mural</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col px-2">
                <Input
                    placeholder="Digite o seu email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="****************"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                type="submit"
                className="h-9 bg-blue-900 rounded border-0 text-lg font-medium text-white cursor-pointer">
                    Entrar
                </button>
            </form>
        </div>
        </div>
    )
}
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { db } from "../../services/firebaseConnection"
import {
    addDoc,
    collection,
} from 'firebase/firestore'

import { useState, type FormEvent } from "react"

export function Admin(){

    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        if(nameInput === "" || urlInput === "" || descriptionInput === ""){
            alert("Preencha todos os campos")
            return;
        }

        addDoc(collection(db, "links"), {
            name: nameInput,
            description: descriptionInput,
            url: urlInput,
            created: new Date()
        })
        .then(() => {
            setNameInput("")
            setDescriptionInput("")
            setUrlInput("")
        })
        .catch((error) => {
            console.log("Erro ao cadastrar no banco" + error)
        })
        
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form onSubmit={handleRegister} className="flex flex-col mt-15 mb-3 w-full max-w-xl">
                <label className="text-blue-900 font-medium mt-2 mb-2">Nome do projeto</label>
                <Input
                    placeholder="Digite o nome do projeto"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />

                <label className="text-blue-900 font-medium mt-2 mb-2">Descrição do projeto</label>
                <Input
                    placeholder="Digite a descrição do projeto"
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                />

                <label className="text-blue-900 font-medium mt-2 mb-2">Link do projeto</label>
                <Input
                    type="url"
                    placeholder="Digite o link do projeto"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                 {nameInput !== "" && (
                    <div className="flex flex-col rounded-md mt-7 mb-7 p-1 border-blue-900 border items-center justify-center">
                        <label className="text-blue-900 font-medium mt-2 mb-2">Veja como está ficando: </label>
                        <article 
                            className="w-11/12 max-w-lg flex flex-col justify-between bg-blue-200 p-3 rounded-md mb-2"
                        >
                            <p className="font-medium text-blue-950 text-center">{nameInput}</p>
                            <p className="text-blue-950 text-left mt-1">{descriptionInput}</p>
                        </article>
                    </div>
                 )}

                <button 
                    type="submit"
                    className="cursor-pointer mb-7 bg-blue-900 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
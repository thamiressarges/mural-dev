import { Link } from "react-router-dom";

export function Error(){
    return(
        <div className="flex w-full justify-center items-center flex-col min-h-screen">
            <h1 className="font-bold text-4xl mb-4 ">Página não encontrada</h1>

            <Link className="bg-blue-900 py-1 px-4 text-white rounded-md" to='/'>
                Voltar para home
            </Link>
        </div>
    )
}
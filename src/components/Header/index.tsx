import { MdLogout } from "react-icons/md";;
import { Link } from "react-router-dom"
import { LuChartGantt  } from "react-icons/lu";

import {auth} from '../../services/firebaseConnection'
import { signOut } from "firebase/auth";

export function Header(){

    async function handleLogout(){
        await signOut(auth);
    }

    return(
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="flex flex-row items-center justify-around mt-7">
                <div className="size-9 bg-blue-900 p-1 rounded">
                    <LuChartGantt size={25} color="white"/>
                </div>
                <div className="flex gap-4">
                    <Link className="font-bold text-blue-900 text-md hover:underline" to="/">Home</Link>
                    <Link className="font-bold text-blue-900 text-md hover:underline" to="/admin">Adicionar</Link>
                    <Link className="font-bold text-blue-900 text-md hover:underline" to="/admin/projects">Projetos</Link>
                </div>
                <button onClick={handleLogout} className="p-1 cursor-pointer">
                    <MdLogout size={25} color="#1c398e"/>
                </button>
            </nav>
        </header>
    )
}
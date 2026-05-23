import { FaTrash } from "react-icons/fa";

interface ProjectProps {
    id: string;
    name: string;
    description: string;
    url: string;
    handleDelete?: (id: string) => void; 
}

export function ProjectCard({ id, name, description, url, handleDelete }: ProjectProps) {
    
    if (handleDelete) {
        return (
            <article className="w-full max-w-xl mx-auto flex flex-row justify-between items-center bg-blue-200 p-3 rounded-md mb-2">
                <div className="flex flex-col">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <p className="font-medium text-blue-950 text-left hover:underline">
                            {name}
                        </p>
                    </a>
                    <p className="text-blue-950 text-left mt-1">{description}</p>
                </div>

                <button onClick={() => handleDelete(id)} className="cursor-pointer ml-4">
                    <FaTrash size={22} color="red" />
                </button>
            </article>
        );
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full mb-4">
            <article className="w-full flex flex-col justify-between bg-blue-200 p-3 rounded-md transition-transform hover:scale-105 cursor-pointer">
                <p className="font-medium text-blue-950 text-left">{name}</p>
                <p className="text-blue-950 text-left mt-1">{description}</p>
            </article>
        </a>
    );
}
import { useEffect, useState } from "react";

import { Header } from "../../components/Header"

import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { ProjectCard } from "../../components/ProjectCard";

interface ProjectProps {
    id: string;
    name: string;
    description: string;
    url: string;
}

export function Project(){

    const [projects, setProjects] = useState<ProjectProps[]>([])

    useEffect(() => {
        const projectsRef = collection(db, "links");
        const queryRef = query(projectsRef, orderBy("created", "asc"));

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as ProjectProps[];
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    url: doc.data().url,
                })
            })
            setProjects(lista);
        })
            return () => {
                unsub();
            }
    }, [])

    async function handleDeleteProject(id: string){
        const docRef = doc(db, "links", id)
        await deleteDoc(docRef)
    }

    return(
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header/>

        <div className="w-full max-w-xl mt-25 flex flex-col gap-2"> 
            
            {projects.map((project) => (
                <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                url={project.url}
                handleDelete={handleDeleteProject}
                />
            ))}

        </div>
    </div>
    )
}
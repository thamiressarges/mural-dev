import { useEffect, useState } from "react"

import { ProjectCard } from "../../components/ProjectCard"

import { db } from "../../services/firebaseConnection"
import { 
    getDocs,
    collection,
    orderBy,
    query,
 } from "firebase/firestore"


interface ProjectProps {
    id: string;
    name: string;
    description: string;
    url: string;
}

export function Home(){

    const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        function loadProjects(){

            const projectsRef = collection(db, "links")
            const queryRef = query(projectsRef, orderBy("created", "asc"))

            getDocs(queryRef)
            .then((snapshot) => {
                let lista = [] as ProjectProps[];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        url: doc.data().url
                    })
                })

                setProjects(lista)
            })

        }   

        loadProjects();
    }), []

    return(
        <div className="max-w-xl mx-auto flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-black">Thamires Sarges</h1>
            <span className="text-black mb-5 mt-3">Veja meus projetos</span>
        
            <main className="flez flex-col w-11/12 max-w-x1 text-center">
                
                {projects.map((project) => (
                                <ProjectCard
                                    id={project.id}
                                    name={project.name}
                                    description={project.description}
                                    url={project.url}                                />
                            ))}
            </main>
        </div>
    )
}
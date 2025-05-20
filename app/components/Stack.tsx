import React from "react"
import { FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiTypescript, SiPostgresql } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"

const stackItems =[
    {id: 1, name: 'React', icon: FaReact, color: '#61DAFB'},
    {id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#339933'},
    {id: 3, name: 'TypeScript', icon: SiTypescript, color: '#3178C6'},
    {id: 4, name: 'PostgreSQL', icon: SiPostgresql, color: '#47A248'},
    {id: 5, name: 'Next.js', icon: TbBrandNextjs, color: '#000000'},
    {id: 6, name: 'Python', icon: FaPython, color: '#3776AB'},
    {id: 7, name: 'Java', icon: FaJava, color: '#007396'},
]

export const Stack = () => {
    return(
        <section className="py-16 glass" id="stack">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Tech Stack</h2>
                <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                    {stackItems.map((item)=>(
                        <div
                            key={item.id}
                            className="flex items-center justify-center flex-col p-4"
                        >
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                            {React.createElement(item.icon, {
                                className:"w-20 h-20",
                                style: { color: item.color },
                            })}
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        
        </section>
    )
}
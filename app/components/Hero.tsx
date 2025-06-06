"use client"

import { useEffect } from "react"
import { useMotionValue, useMotionTemplate, animate, motion } from "framer-motion";
import profilePic from '../../public/linkedinProfile.jpeg'
import Image from 'next/image';
import python from './python.svg'
import cpp from './cpp.png'
import java from './java.png' 


const COLORS_TOP = ["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect
    (() => {
        animate(color, COLORS_TOP, {
            ease:"easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",})
    }, [])

    const backgroundImage= useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section 
        style ={{
            backgroundImage
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                Open for Work
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am </h1>
                <h1 className="max-w bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-4xl md:text-7xl">
                    Yash Chauhan
                </h1>
                <div>
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={250}
                        />
                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image
                    src={python}
                    alt="python"
                    width={40}
                    className="rounded-2xl mx-auto"
                    />
                    <Image
                    src={cpp}
                    alt="python"
                    width={40}
                    className="rounded-2xl mx-auto"
                    />
                    <Image
                    src={java}
                    alt="python"
                    width={40}
                    className="rounded-2xl mx-auto"
                    />
                    <p></p>
                </div>
                </div>
                <p className="my-6 max-w-xl">FullStack Web Developer - Third year CSE Undergrad</p>
                <motion.button
                style={{
                    border,
                    boxShadow
                }}
                whileHover={{
                    scale: 1.015
                }}
                 whileTap={{
                    scale: 0.98, 
                    opacity: 0.8,
            }}
                className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                onClick={() => window.open('https://drive.google.com/file/d/1vguiJTxuqMBx9jKn1sBnuy3OnJRqBxU_/view?usp=sharing', '_blank')}
                >
                    Download Resume
                </motion.button>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>

    );
}
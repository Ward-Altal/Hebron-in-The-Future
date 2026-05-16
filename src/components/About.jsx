import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

function About() {
    useGSAP(() => {
        const clipanimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'top center',
                end: '+=800',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                markers: false, 
            },
        })

        clipanimation.to('.maske-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
            duration: 1,
            ease: 'power1.inOut',
        })
    })

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Hebron city future imagination model by Ward Altal
                </h2>

                <AnimatedTitle
                    title={`<b>discover</b> <b>the</b> <b>Future</b> <br/> <b>of</b> <b>Hebron</b>`}
                    containerClass="mt-5 !text-black text-center special-font text-7xl"
                />



                <div className="about-subtext">
                    <p>The future of Hebron is a blend of history and innovation</p>
                    <p>a city where ancient stone streets meet smart technology, green energy, and modern architecture</p>
                </div>
            </div>

            <div className="relative h-screen" id="clip">
                <div className="maske-clip-path about-image relative mx-auto overflow-hidden rounded-full w-[60vw] h-[60vh]">
                    <img
                        src="img/img12.jpg"
                        alt="background"
                        className="absolute left-0 top-0 size-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default About

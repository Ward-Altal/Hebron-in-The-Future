import React from 'react'
import Button from './Button'

function Contact() {

    const ImageClipBox = ({ src, className }) => (
        <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
            <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 hover:scale-125"
            />
        </div>
    )

    return (
        <div id="contact" className="my-32 w-screen px-6 md:px-10">
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-black to-zinc-900 py-32 text-blue-50 shadow-2xl">

                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15),transparent_70%)] pointer-events-none" />

                {/* LEFT IMAGE STACK - hidden on small screens */}
                <div className="absolute hidden md:flex flex-col gap-10 left-5 md:left-10 top-1/2 -translate-y-1/2 z-0">
                    <ImageClipBox
                        src="img/img5.png"
                        className="w-36 h-52 md:w-48 md:h-64 rotate-[-6deg] opacity-90"
                    />
                    <ImageClipBox
                        src="img/img7.png"
                        className="w-36 h-52 md:w-48 md:h-64 rotate-[8deg] translate-x-4 md:translate-x-6 opacity-90"
                    />
                </div>

                {/* RIGHT IMAGE - hidden on small screens */}
                <div className="absolute hidden md:block right-5 md:right-10 top-1/2 -translate-y-1/2 z-10">
                    <div className="relative w-52 h-64 md:w-72 md:h-96">
                        {/* Glow behind */}
                        <div className="absolute inset-0 blur-3xl rounded-full" />
                        <img
                            src="img/img11.png"
                            alt="Miles3"
                            className="w-full h-full object-cover object-center rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                {/* CENTER TEXT */}
                <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 max-w-3xl">
                    <p className="font-general text-xs sm:text-[11px] uppercase tracking-widest text-red-200">
                        Join The Future of Hebron City
                    </p>

                    <p className="special-font mt-8 sm:mt-10 font-zentry text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] leading-tight sm:leading-snug">
                        <b>Let's</b> <b>Have</b> <b>the</b><br />
                        <b>Best</b> <b>Experience</b> <b>of</b> <br />
                        <b>Hebron</b> <b>City</b> <b>Future</b>
                    </p>

                    <Button
                        title="contact us"
                        containerClass="mt-8 sm:mt-10 cursor-pointer hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact

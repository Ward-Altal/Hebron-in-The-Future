import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import { useState } from 'react'
import { useRef } from 'react'

const BentoTilt = ({ children, className='' }) => {

    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top , width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        const tiltX= (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
        
    }
    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
         style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full overflow-hidden rounded-xl">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      
      <div className="relative z-10 flex flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font text-3xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base opacity-80">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section className="bg-black pb-32 md:pb-52">
      <div className="container mx-auto px-4 md:px-10">
      
        <div className="px-2 py-20 md:py-32 space-y-5">
          <p className="font-circular-web text-lg text-blue-50">
            The Future of Hebron
          </p>
          <p className="max-w-xl font-circular-web text-base md:text-lg text-blue-50 opacity-60">
            The future of Hebron is a blend of history and innovation — a city where ancient stone streets meet smart technology, green energy, and modern architecture. Imagine vibrant markets powered by digital businesses, clean public spaces filled with trees and light rail transport, and universities turning young ideas into global startups. Hebron’s famous craftsmanship and culture remain alive, but connected to the world through technology, tourism, and creativity. A city that respects its deep roots while rising into a modern, sustainable, and inspiring future for the next generation.
          </p>
        </div>

      
        <BentoTilt className="relative mb-10 h-[40vh] md:h-[65vh] w-full overflow-hidden rounded-xl">
          <BentoCard
            src="/img/img1.png"
            title={<><b>skyscraper</b></>}
            description="The future of Hebron could be breathtaking — a modern city filled with towering skyscrapers, advanced architecture, and vibrant urban life. Huge glass towers could rise across the skyline, turning Hebron into a powerful center for business, technology, and tourism. Modern streets, luxury malls, smart transportation, and glowing city lights would give the city a futuristic atmosphere while still preserving its rich history and culture.

Hebron would become a symbol of growth and ambition."
          />
        </BentoTilt>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(250px,_1fr)]">
        
          <BentoTilt className="bento-tilt_1 md:row-span-2  ">
            <BentoCard 
              src="/img/img2.png"
              title={<><b>Highways</b></>}
              description="The future of Hebron could feature massive wide highways connecting every part of the city with speed and efficiency. Modern multi-lane roads lined with palm trees, smart lighting, and futuristic bridges would transform transportation and reduce traffic."
            />
          </BentoTilt>

     
          <BentoTilt className="bento-tilt_1">
            <BentoCard
              src="/img/img3.png"
              title={<><b>City Plaza</b></>}
              description="A future Harbor City plaza could become a central landmark where residents and visitors gather for events, relaxation, and daily life — bringing together modern architecture, green spaces, and waterfront views in one connected urban experience."
            />
          </BentoTilt>

       
          <BentoTilt className="bento-tilt_1">
            <BentoCard
              src="/img/img11.png"
              title={<><b>Wide Parking</b></>}
              description="The parking areas will be carefully planned to support the city’s modern infrastructure, offering organized layouts, smooth traffic flow, and easy connectivity to public gathering spaces. This vision reflects Harbor City’s goal of combining functionality, comfort, and modern urban living in one destination."
            />
          </BentoTilt>

    
          {/* <div className="bento-tilt_2 flex flex-col justify-between rounded-xl bg-red-600 p-6 text-black">
            <h1 className="bento-title special-font text-3xl md:text-5xl max-w-64">
              <b>More coming soon!</b>
            </h1>
            <TiLocationArrow className="m-5 scale-[3] self-end" />
          </div> */}

      
          {/* <BentoTilt className="bento-tilt_2 overflow-hidden rounded-xl">
            <video
              src="/videos/hit.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </BentoTilt> */}
        </div>
      </div>
    </section>
  )
}

export default Features

import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { gsap } from 'gsap';
import Button from './Button';
import { assetPath } from '../utils/assetPath';
function Story() {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.6,
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * -10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      ease: 'power1.inOut',
      transformPerspective: 500,
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-20 px-6 md:px-20 lg:px-32">
        <p className="font-general text-sm uppercase tracking-widest text-red-200 md:text-xs mb-6">
          Hebron City
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="<b>City</b> <b>OF</b> <br/> <b>INCIENT</b> <b>&</b> <b>FUTURE</b> "
            containerClass="special-font mt-5 pointer-events-none mix-blend-difference relative z-10 text-4xl md:text-5xl lg:text-6xl text-center md:text-left"
            sectionId="#story"
          />

          <div className="stort-img-container w-full mt-10">
            <div className="stort-img-mask">
              <div className="stort-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src={assetPath('img/img6.png')}
                  alt="entrance"
                  className="object-contain w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center md:justify-start">
          <div className="max-w-md text-center md:text-left">
            <p className="font-circular-web text-violet-50 text-lg md:text-xl leading-relaxed">
             Hebron City in the future will become a modern and vibrant destination that combines advanced urban design with comfortable public spaces and smart infrastructure. Wide streets, organized public parking, green plazas, and modern buildings will create a dynamic atmosphere for residents and visitors alike. The city’s future vision aims to transform Hebron into a lively center for business, entertainment, and community life while preserving its unique identity and culture.   
            </p>

            <Button id='realm-button' title='discover' containerClass='mt-5' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;

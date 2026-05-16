import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimatedTitle({ title, containerClass }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef); // Scoped selector

    gsap.set(q('.animate-word'), {
      opacity: 0,
      x: 60,
      rotateY: 15,
      transformOrigin: 'left center',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom', // starts when entering viewport
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(q('.animate-word'), {
      opacity: 1,
      x: 0,
      rotateY: 0,
      ease: 'power3.out',
      stagger: 0.04,
      duration: 0.8,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title text-center text-5xl md:text-7xl uppercase font-bold tracking-tight ${containerClass}`}
    >
      {title.split(/<br\s*\/?>/).map((line, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap gap-2 px-10 leading-[0.9]"
        >
          {line.split(' ').map((word, i) => (
            <span
              key={i}
              className="animate-word inline-block"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;

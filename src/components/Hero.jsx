import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assetPath } from '../utils/assetPath';

gsap.registerPlugin(ScrollTrigger);

function Hero() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVdideos, setLoadedVdideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);
    const upcomingvideoIndex = (currentIndex % totalVideos) + 1;

    useEffect(() => {
        if (loadedVdideos === totalVideos - 2) {
            setIsLoading(false);
        }
    }, [loadedVdideos])

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                position: 'center',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',

                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });


    useGSAP(() => {
        
        gsap.set('#video-frame', {
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0% 0% 0% 0%',
        });

       
        gsap.to('#video-frame', {
            clipPath: 'polygon(14% 0%, 70% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0% 0% 40% 10%',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                markers: false,
            },
        });
    });




    const handeMiniVideoClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingvideoIndex);
    }

    const getVideosrc = (index) => assetPath(`videos/hero-${index}.mp4`);
    const handleVideoLoad = () => {
        setLoadedVdideos(prev => prev + 1);
    }
    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>

            {isLoading && (
                <div className='absolute inset-0 flex justify-center items-center z-[100] bg-blue-100'>
                    <div className='three-body'>
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                        <div className='three-body__dot' />
                    </div>
                </div>
            )}

            <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden
            rounded-lg bg-blue-100'>
                <div>
                    <div className='mask-clip-path top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-50 size-64
                    cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handeMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all
                        duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video ref={nextVideoRef}
                                src={getVideosrc(upcomingvideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVideoRef}
                        src={getVideosrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        src={getVideosrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0  top-0 size-full object-cover object-center'
                    />

                </div>

                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100 text-8xl'>
                    <b>Ward Altal</b>
                </h1>

                <div className='absolute ledt-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100 text-8xl'>
                            <b>Hebron City</b>
                        </h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100 text-xl'>
                            Future of Hebron <br/>
                            Model by Ward Altal <br/>
                        </p>
                        {/* <Button id="watch-dash-trailer" title="watch trailer" leftIcon={<TiLocationArrow />}
                            containerClass="bg-blue-100 flex-center gap-1" /> */}
                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 text-black-100 text-8xl'>
                <b>Ward Altal</b>
            </h1>
        </div>
    )
}

export default Hero

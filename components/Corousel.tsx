"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Carousel() {
    const images = [
        "/fruit-cocktail.jpg",
        "/healthy-banana.jpg",
        "/pumpkin-juice.jpg",
        "/summer-cocktail.jpg",
        "/bunch-bread-loafs-table.jpg"
    ];

    const [activeIndex, setActiveIndex] = useState(1); // Start at the first real image (index 1)
    const [isAnimating, setIsAnimating] = useState(false);

    const totalSlides = images.length + 2; // Two extra slides for looping

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                handleNext();
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [isAnimating]);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleTransitionEnd = () => {
        setIsAnimating(false);
        // Loop to the first real slide when reaching the clone of the last slide
        if (activeIndex >= totalSlides - 1) {
            setActiveIndex(1);
        }
        // Loop to the last real slide when reaching the clone of the first slide
        if (activeIndex <= 0) {
            setActiveIndex(totalSlides - 2);
        }
    };

    const slides = [
        images[images.length - 1], // Clone of last image for seamless transition
        ...images,
        images[0] // Clone of first image for seamless transition
    ];

    return (
        <div id="default-carousel" className="relative w-[95%] md:[95%] lg:[80%] mx-auto overflow-hidden mt-24 rounded-md h-[350px]" data-carousel="slide">
            <div
                className="relative flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {slides.map((image, index) => (
                    <div key={index} className="min-w-full h-56 md:h-96">
                        <Image src={image} className="w-full h-[350px] object-cover" alt={`Slide ${index}`} width={6067} height={3467}/>
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${activeIndex === index + 1 ? 'bg-blue-500' : 'bg-white'}`}
                        aria-current={activeIndex === index + 1}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setActiveIndex(index + 1)}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                onClick={handlePrev}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                onClick={handleNext}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

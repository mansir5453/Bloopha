"use client";

import React, { forwardRef } from 'react';
import { OrangeGlow } from "@/components/ui/orange-glow";

const StickyScroll = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='relative w-full' ref={ref}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <OrangeGlow variant="center" intensity="medium" className="opacity-30" />
            </div>

            <section className='text-black h-screen w-full grid place-content-center sticky top-0 z-0'>
                <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                    <span className="text-[#F0660A]">Visual Excellence</span>
                    <br />
                    Crafted for Impact
                    <br />
                    <span className="text-lg font-normal opacity-60 mt-4 block">
                        Explore our curated gallery of digital mastery
                    </span>
                </h1>
            </section>

            <section className='w-full relative z-10 bg-white/80 backdrop-blur-md'>
                <div className='grid grid-cols-12 gap-4 p-4'>
                    <div className='grid gap-4 col-span-4'>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=800&auto=format&fit=crop'
                                alt='Digital Art 1'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=800&auto=format&fit=crop'
                                alt='Digital Art 2'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=800&auto=format&fit=crop'
                                alt='Digital Art 3'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=800&auto=format&fit=crop'
                                alt='Digital Art 4'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                    </div>

                    <div className='sticky top-0 h-screen w-full col-span-4 gap-4 grid grid-rows-3 pt-4 pb-4'>
                        <figure className='w-full h-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=800&auto=format&fit=crop'
                                alt='Digital Art 5'
                                className='transition-transform duration-500 h-full w-full object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full h-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1476180814856-a36609db0493?w=800&auto=format&fit=crop'
                                alt='Digital Art 6'
                                className='transition-transform duration-500 h-full w-full object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full h-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=800&auto=format&fit=crop'
                                alt='Digital Art 7'
                                className='transition-transform duration-500 h-full w-full object-cover group-hover:scale-105'
                            />
                        </figure>
                    </div>

                    <div className='grid gap-4 col-span-4'>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=800&auto=format&fit=crop'
                                alt='Digital Art 8'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=800&auto=format&fit=crop'
                                alt='Digital Art 9'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=800&auto=format&fit=crop'
                                alt='Digital Art 10'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                        <figure className='w-full group overflow-hidden rounded-xl'>
                            <img
                                src='https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=800&auto=format&fit=crop'
                                alt='Digital Art 11'
                                className='transition-transform duration-500 w-full h-96 object-cover group-hover:scale-105'
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
});

StickyScroll.displayName = 'StickyScroll';

export default StickyScroll;

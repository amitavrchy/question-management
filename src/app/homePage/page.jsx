"use client";
import Banner from '@/components/Banner';
import Counter from '@/components/Counter';
import InfoCards from '@/components/InfoCards';
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials';
import React from 'react'

function HomePage() {
    return (
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50'>
            <Navbar />
            <Banner />
            <InfoCards />
            <Testimonials />
            <Counter />
        </div>
    )
}

export default HomePage
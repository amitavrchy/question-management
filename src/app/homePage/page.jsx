"use client";
import Banner from '@/components/Banner';
import InfoCards from '@/components/InfoCards';
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials';
import React from 'react'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <InfoCards />
            <Testimonials />
        </div>
    )
}

export default HomePage
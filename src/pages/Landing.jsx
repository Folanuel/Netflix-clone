import React from 'react'
import { Link } from 'react-router-dom'
import NetflixBanner from '../assets/netflixbanner.jpg'

const Landing = () => {
    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-bl from-black'></div>
                <img className='w-full h-screen object-cover' src={NetflixBanner} alt='netflix banner' />
                <div className='absolute w-full top-[20%] p-4 md:p-8 space-y-3'>
                <h1 className='text-white text-5xl font-bold text-center'>Unlimited movies, TV</h1>
                <h1 className='text-white text-5xl font-bold text-center'>shows, and more.</h1>
                <p className='text-white text-3xl text-center'>Watch anywhere. Cancel anytime.</p>
                <Link to='/signup'>
                <div className='flex justify-center'>
                    <button className='bg-red-700 text-white px-4 py-2 text-center items-center justify-items-center rounded'>Sign Up</button>
                </div>                               
                </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Landing
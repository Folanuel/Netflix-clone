import React from 'react'
import { useNavigate } from 'react-router-dom'
import NetflixAvatar from '../assets/netflixavatar.png'
import { UserAuth } from '../context/AuthContext';
import Accordion from '../components/Accordion';

const Profile = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
        await logOut();
        navigate('/');
        } catch (error) {
        console.log(error);
        }
    };
    return (
        <div className='w-full h-screen bg-black'>
            <div className="flex items-center justify-center h-full top-[20%] p-4 md:p-8 space-y-3">
                <div>
                    <h1 className='text-3xl text-white'> Edit Profile</h1>
                    <div className="w-20 h-20">
                    <img src={NetflixAvatar} alt="Profile" className="w-full h-full object-cover" />
                </div>
                </div>
                
                <div>
                    <h1 className="text-white text-2xl font-bold mt-4 mb-8">{user?.displayName}</h1>
                    {/* <details className='cursor-pointer pb-4'>  
                        <summary className='text-white bg-red-700 text-2xl'>Subscription</summary>  
                        <h3 className='text-white'>This is section 1</h3>  
                    </details> */}
                    <Accordion title="Subscription" content="Accordion content goes here" />
                    <button className="bg-red-600 mt-8 py-2 px-4 text-white rounded-md" onClick={handleLogout}>Sign Out</button>
                </div>
            </div>
        
        </div>
    )
    }

export default Profile
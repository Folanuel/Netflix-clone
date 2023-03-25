import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'


const Row = ({title, fetchURL, rowID}) => {
    const [movie, setMovie] = useState([]);   
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])
    console.log(movie)

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movie.map((item, id) => {
                    return(
                    <Movie key={id} item={item}/>
                )})}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>

        </>
    )
}

export default Row
import React from 'react'
import Main from '../components/Main'
import requests from '../Request'
import Row from '../components/Row'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Toprated' fetchURL={requests.requestTopRated} />
            <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
            
        </>
    )
}

export default Home
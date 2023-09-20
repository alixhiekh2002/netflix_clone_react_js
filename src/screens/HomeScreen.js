import React from 'react'
import './HomeScreen.css'  
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Request'

const HomeScreen = () => {
  return (
    <div className='home_screen'>
          <Nav/>
          <Banner/>
          <Row title = "NetflixOriginals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
          <Row title = "Trending" fetchUrl = {requests.fetchtrending}/>
          <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
          <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
          <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
          <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
          <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
          <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen

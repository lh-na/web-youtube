import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { movieText } from '../data/movie'

const Movie = () => {
  return (
    <Main title="영화 페이지" 
          description="영화 페이지 페이지입니다.">
      <section id='moviePage'>
        <h2>💎추천영화 페이지💎</h2>
        <div className='video__inner'>
          <VideoCard videos={movieText}/>
        </div>
      </section>
    </Main>
  )
}

export default Movie
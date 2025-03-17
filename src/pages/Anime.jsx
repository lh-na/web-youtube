import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { AnimeText } from '../data/anime'

const Anime = () => {
  return (
    <Main title="애니 페이지" 
          description="애니 페이지입니다.">
      <section id='moviePage'>
        <h2>🌜추천애니 페이지🌛</h2>
        <div className='video__inner'>
          <VideoCard videos={AnimeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime


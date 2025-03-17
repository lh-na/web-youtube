import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { BookText } from '../data/book'

const Book = () => {
  return (
    <Main title="도서 페이지" 
          description="도서 페이지입니다.">
      <section id='moviePage'>
        <h2>🍥추천도서 페이지🍥</h2>
        <div className='video__inner'>
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book
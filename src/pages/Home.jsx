import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import Videoslider from '../components/video/Videoslider'
import { movieText } from '../data/movie'
import { BookText } from '../data/book'
import { AnimeText } from '../data/anime'
import { musicText } from '../data/music'
import { todayText } from '../data/Today'

const Home = () => {
  return (
    <Main title="유튜브 채널" description ="유튜브 채널 페이지입니다.">
        <Today videos={todayText} id='today'/>
        <Music videos={musicText} title='💖추천 음악을 소개합니다💖' id='music'/>
        <Videoslider videos={movieText} title='💎추천 영화를 소개합니다💎' id='movie'/>
        <Videoslider videos={BookText} title='🍥추천 도서를 소개합니다🍥' id='movie'/>
        <Videoslider videos={AnimeText} title='🌜추천 애니를 소개합니다🌛' id='movie'/>
        {/* <Movie/>
        <Book/>
        <Anime/> */}
        {/* <Portfolio/>
        <Youtube/> */}
    </Main>
  )
}

export default Home
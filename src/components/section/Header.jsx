import React from 'react'
import { CiDark } from "react-icons/ci";
import { FiCloud } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { FiMusic } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>my<br/>youtube</span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><CiDark />My youtube</a>
          </li>
          <li>
            <a href='/today'><FiCloud />추천 영상</a>
          </li>
          <li>
            <a href='/music'><FiMusic />추천 음악</a>
          </li>
          <li>
            <a href='/movie'><FiImage />추천 영화</a>
          </li>
          <li>
            <a href='/book'><FiEdit2 />추천 도서</a>
          </li>
          <li>
            <a href='/anime'><FiGithub />추천 애니</a>
          </li>
          <li>
            <a href='/youtube'><FiLock />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/youtube'>My Youtube</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/css'>CSS</a>
          </li>
          <li>
            <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React</a>
          </li>
          <li>
            <a href='/search/java'>JAVA</a>
          </li>
          <li>
            <a href='/search/oracle'>ORACLE</a>
          </li>
          <li>
            <a href='/search/vue.js'>Vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
        <ul>
          <li>
            <a href='http://github.com'>
            <FaGithub />
            </a>
          </li>
          <li>
            <a href='http://youtube.com'>
            <RiYoutubeLine />
            </a>
          </li>
          <li>
            <a href='http://google.com'>
            <FaGoogle />
            </a>
          </li>
          <li>
            <a href='http://instagram.com'>
            <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
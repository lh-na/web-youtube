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


export const headerMenus = [
    {
        title:"My youtube",
        icon:<CiDark />,
        src: "/"
    },
    {
        title:"추천 영상",
        icon:<FiCloud />,
        src: "/today"
    },
    {
        title:"추천 음악",
        icon:<FiMusic />,
        src: "/music"
    },
    {
        title:"추천 영화",
        icon:<FiImage />,
        src: "/movie"
    },
    {
        title:"추천 도서",
        icon:<FiEdit2 />,
        src: "/book"
    },
    {
        title:"추천 애니",
        icon:<FiGithub />,
        src: "/anime"
    },
    {
        title:"유튜브 사이트",
        icon:<FiLock />,
        src: "/youtube"
    }
];

export const searchKeyword = [
    {
        title:"My youtube",
        src: "/"
    },
    {
        title:"HTML",
        src: "/search/html"
    },
    {
        title:"CSS",
        src: "/search/css"
    },
    {
        title:"JavaScript",
        src: "/search/javascript"
    },
    {
        title:"React",
        src: "/search/react.js"
    },
    {
        title:"JAVA",
        src: "/search/java"
    },
    {
        title:"ORACLE",
        src: "/search/oracle"
    },
    {
        title:"SPRING",
        src: "/search/spring"
    }

];

export const snsLink = [
    {
        title: "github",
        url: "http://github.com",
        icon: <FaGithub />
    },
    {
        title: "youtube",
        url: "http://youtube.com",
        icon: <RiYoutubeLine />
    },
    {
        title: "google",
        url: "http://google.com",
        icon: <FaGoogle />
    },
    {
        title: "instagrame",
        url: "http://instagram.com",
        icon: <FaInstagramSquare />
    }
];
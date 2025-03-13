import React from 'react'
import Header from './Header'
import Footer from './Footer'


// properties = props

const Main = (props) => {
  return (
    <>
    <Header/>
    <main id='main' role='main'>
      {props.children}
    </main>
    <Footer/>
    </>
  )
}

export default Main
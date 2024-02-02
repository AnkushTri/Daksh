import React from 'react'
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <Wrapper>
      <div className="container">
        <Slider />
      </div>
      <div className="container">
        <Hero />
      </div>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
display:flex;
flex-direction:column;
`

export default Home
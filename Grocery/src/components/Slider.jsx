import React from 'react'
import styled from 'styled-components'

const Slider = () => {
  return (
    <Wrapper>
        <div className="slide">
              <Image src="https://www.bigbasket.com/media/uploads/banner_images/B2C012208077-15000-DT-bathing-1600x460-all.jpg" alt="" />
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:90%;
margin: 0 auto;
height:50vh;
border:2px solid grey;
`
const Image=styled.img`
    width:100%;
    height:50vh;
`

export default Slider
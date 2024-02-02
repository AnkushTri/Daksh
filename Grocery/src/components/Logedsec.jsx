import React from 'react'
import styled from 'styled-components'

const Logedsec = () => {
  return (
    <Wrapper>
      <div className='di'>Please Login to see products</div>
    </Wrapper>
    
  )
}
const Wrapper=styled.div`
width:100%
 height:5rem;
.di{
  // border:2px solid grey; 
   height:7rem;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1.6rem;
   font-weight:600;
}
`

export default Logedsec
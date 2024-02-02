import React from 'react'
import { MdLocationPin } from "react-icons/md";
import styled from 'styled-components';

const Location = () => {
  return (
    <Wrapper>
     <div className='location'>
     <MdLocationPin/>
    </div>
    <div className='loc-title'>Mohali</div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
display:flex;
gap:2px;
align-items:center;
justify-content:center;

.location{
    font-size:1.5rem;
    margin-top:2px;
}
.loc-title{
    font-size:1rem;
}

`

export default Location
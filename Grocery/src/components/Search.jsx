import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Wrapper>
        <Input type="text" placeholder="Search for a Product, service" />
          <Button><FaSearch /></Button>
    </Wrapper>
  )
}

const Wrapper=styled.div`
display:flex;
`
const  Input=styled.input`
width:18rem;
padding:0.5rem 2rem;
`
const  Button=styled.button`
padding:0 0.7rem;
`


export default Search
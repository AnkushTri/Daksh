import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ image, title, price, review, id }) => {

    const navigate = useNavigate()
    const handleClick=(id)=>{
        navigate(`/${id}`)
    }

    return (
        <>
            {/* <NavLink to={`/product/productdetail/${id}`}  id="product-detail">  */}
            <Wrapper>
                <img src={image} className="image" />
                <div className="card-text">
                    <p className="title">{title}</p>
                    <p><i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>
                    <div className="bag-icon">
                        <p>₹{price}</p>
                        <button onClick={()=>handleClick(id)} > <i class="fa-solid fa-bag-shopping">
                        </i> </button>
                    </div>

                </div>
            </Wrapper>
            {/* </NavLink> */}
        </>
    )
}

const Wrapper=styled.div`
// display:flex;
box-shadow: 10px 10px 10pxx 10px hsl();
    padding: 2rem 2.5rem;
    margin: 1rem 1.5rem; 
    width: 20rem;
    display: inline-table;
    background-color: rgb(96, 119, 134);
    /* text-wrap: inline; */
    box-sizing: border-box;
    border:1px solid rgb(173, 95, 95); 
    .image {
    width: 70%;
    height: 6rem;
    margin: 0rem 15%;
}

.btn {
    border: 30px;
    color: rgb(6, 186, 105);
    text-decoration-color: black;
    padding: 8px 16px;
    font-weight: 600;
    margin-top: 10px;
    background-color: rgb(195, 30, 30);
    border-radius: 30px;
}
// .card-text{
//     position: relative;
//     top: -20px;
//     height: 7rem;
//     padding: 11px;
// }
.card-text .title{
    margin-top: 2rem;
    font-weight: 600;
    font-size: 19px;
}
.card-text p{
    margin-top: -11px;
}   
.bag-icon{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.bag-icon i{
    margin-top:-3rem;
    color: black;
}
`
export default Card;

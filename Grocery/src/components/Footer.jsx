import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-bottom">
                <p>@{new Date().getFullYear()} Created By Anku raj</p>
                <div >
                    <p>Privacy Policy</p>
                    <p>Term & Condition</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    .footer-bottom{
    border-top: 1px solid white;
    padding: 11px;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: white;
    }
`
export default Footer;
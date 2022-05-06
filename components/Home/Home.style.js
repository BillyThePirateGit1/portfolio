import styled, {keyframes} from "styled-components"

export const Background = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    /* height: 100%; */
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`

export const BGBody = styled.body`
    /* display: inline-flex; */
    width: 100%;
    text-align: center;
    background-color: #171717;
    color: black;
    line-height: 1.7;
    position: relative;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
`

export const HRStyle = styled.hr`
    height: 30px; 
    border-style: solid; 
    border-color: gold; 
    border-width: 1px 0 0 0; 
    border-radius: 20px; 
    width: 40%;

    &:before{
        display: block; 
        content: ""; 
        height: 30px; 
        color: gold;
        margin-top: -31px; 
        border-style: solid; 
        border-color: #8c8b8b; 
        border-width: 0 0 1px 0; 
        border-radius: 20px; 
    }
`


export const HomeH1 = styled.h1`
    color: darkgray;
    font-size: 8rem;
    font-weight: 600;
    text-align: center;
`

export const H2 = styled.h2`
    color: darkgray;
    font-size: 2rem;
    font-weight: 300;
    /* font-family: sans-serif; */
    text-align: center;
`

const drop = keyframes`
    0%{
        top: -50%;
    }
  100%{
    top: 110%;
  }
`

export const LineContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 100vw;
`

export const Line = styled.line`
  position: absolute;
  width: 1px;
  height: 100%;
  display: flex;
  top: 0;
  left: 50%;
  background: rgba(255, 215, 0, 0.1);
  overflow: hidden;

  &::after{
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: ${drop} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  
  &:nth-child(1){
    margin-left: -25%;
    &::after{
      animation-delay: 2s;
    }
  }
  &:nth-child(3){
    margin-left: 25%;
    &::after{
      animation-delay: 2.5s;
    } 
  }
`


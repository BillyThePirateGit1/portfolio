import styled from "styled-components"

export const FooterContainer = styled.nav`
    position: fixed;
    width: 100%;
	height: 80px;
    bottom: 0;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
    border-top: 1px solid gold;
`
export const StyledLink = styled.a`
	color: gold;
    z-index: 4;
	padding: 0rem 1rem;
    text-align: center;
	&:hover{
		color: white;
	}
`


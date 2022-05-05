import styled from "styled-components"

export const NavContainer = styled.nav`
    width: 100%;
	height: 80px;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid gold;
`
export const StyledLink = styled.a`
	color: gold;
	padding: 0rem 2rem;
	&:hover{
		color: white;
	}
`


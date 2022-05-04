import Link from 'next/link';
import { FooterContainer, StyledLink } from './Footer.style'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer(){
    return (
    <FooterContainer> 
        <Link href='https://www.linkedin.com/in/billytran2000/' passHref>
            <StyledLink> <AiFillLinkedin size='2rem'/> </StyledLink>
        </Link>
        <Link href='https://github.com/BillyThePirateGit1' passHref>
            <StyledLink> <AiFillGithub size='2rem'/> </StyledLink>
        </Link>
    </FooterContainer>  
    )
}
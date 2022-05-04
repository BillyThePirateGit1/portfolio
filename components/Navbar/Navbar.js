import Link from 'next/link';
import { NavContainer, StyledLink } from './Navbar.style'
import { AiFillHome } from 'react-icons/ai'

export default function Navbar(){
    return (
    <NavContainer> 
        <div>
            <Link href='/' passHref>
                <StyledLink> <AiFillHome size='2rem'/> </StyledLink>
            </Link>
        </div>
        <div>
            <Link href='/about' passHref>
                <StyledLink> About </StyledLink>
            </Link>
            <Link href='/projects' passHref>
                <StyledLink> Projects </StyledLink>
            </Link>
            <Link href='/tech' passHref>
                <StyledLink> Technologies </StyledLink>
            </Link>
        </div>
    </NavContainer>
    
    
    )
}
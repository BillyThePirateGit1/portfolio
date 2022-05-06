import { Typing, HeroBody } from './Hero.style'
import { BGBody, HomeH1, H2, HRStyle } from './../Home/Home.style'

export default function Hero(){
    return(
        <BGBody>
            <HomeH1> Hiep Overflow </HomeH1>
            <HeroBody>
                <Typing className='typing'>      
                    <h2>I LOVE TRUSSY !!!!!</h2> 
                </Typing>
            </HeroBody>
            <HRStyle/>
        </BGBody>
    )
}
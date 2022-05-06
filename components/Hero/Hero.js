import { Typing, HeroBody } from './Hero.style'
import { BGBody, HomeH1, H2, HRStyle } from './../Home/Home.style'

export default function Hero(){
    return(
        <BGBody>
            <HomeH1> Hiep Overflow </HomeH1>
            <HeroBody>
                <Typing className='typing' aniDelay='2.5s' textLength='14'>      
                    <h2>Web Developer.</h2> 
                </Typing>
            </HeroBody>
            <br/><br/>
            <HeroBody>
                <Typing className='typing' aniDelay='1s' delay='2.6s' textLength='6'>      
                    <h2>Gussy.</h2> 
                </Typing>
            </HeroBody>
            <br/><br/>
            <HeroBody>
                <Typing className='typing' aniDelay='1s' delay='3.6s' textLength='7'>      
                    <h2>Gaming.</h2> 
                </Typing>
            </HeroBody>
            <HRStyle/>
        </BGBody>
    )
}
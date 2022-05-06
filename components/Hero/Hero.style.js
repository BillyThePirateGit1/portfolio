import styled, {keyframes} from 'styled-components'

const textLength = 20;

const type = keyframes`
    from { width: 0; }
    to { width: 100%; }
`
const caret = keyframes` 
    from, to { border-color: transparent; }
    50% { border-color: gold; }
`

export const HeroBody = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #171717;
    text-align: center;
`

export const Typing = styled.div`
    &.typing{
        color: darkgray;
        text-align: center;
        font: 'Roboto Slab', 'serif', monospace;
        overflow: hidden;
        font-size: 2em;
        font-weight: 300;
        border-right: .1em solid gold;
        line-height: 3px;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .1em;
        

        
        animation: ${type} 4s steps(${textLength}, end),
        ${caret} 1s step-end infinite;
    }
`
 
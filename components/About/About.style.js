import styled, {keyframes} from 'styled-components'

// const textLength = 20;

const type = keyframes`
    from { width: 0; }
    to { width: 100%; }
`
const caret = keyframes` 
    from, to { border-color: transparent; }
    50% { border-color: gold; }
`

export const AboutBody = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #171717;
    text-align: center;
`

export const Typing = styled.div`
    width: 0;
    &.typing{
        color: darkgray;
        text-align: center;
        font: 'Roboto Slab', 'serif', monospace;
        overflow: hidden;
        font-size: 2em;
        font-weight: 300;
        border-right: .15em solid gold;
        line-height: 2px;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .1em;
        

        
        animation: ${type} ${({aniDelay}) => aniDelay} steps(${({textLength}) => textLength}, end) forwards;
        /* ${caret} 1s step-end infinite; */
        animation-delay: ${({delay}) => delay};
    }
`
 
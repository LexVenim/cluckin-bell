import ReactDOM from 'react-dom';

import Container from './helpers/Container'
import FlexDiv from './helpers/FlexDiv'

const cs = {
    height: '6vh'
}

const bs = function(color) {
    return {
        'background-color': color       
    }
}

export default class extends React.Component {
  render() {
    return <Container cs={cs} bs={bs(this.props.color)}>
        <div className="header">  
            <FlexDiv position="center">
                <img id="logo" src="/static/logo.png" />
            </FlexDiv>
            <FlexDiv position="left">
                Cluckin Bell
            </FlexDiv>
            <FlexDiv position="center">
                TBD
            </FlexDiv>
            <FlexDiv position="center">
                <div id="signin">
                    Sign In
                </div>
            </FlexDiv>

            <style jsx>{`
                @font-face {
                    font-family: Padaloma;
                    src: url('/static/Padaloma_i.ttf');
                }

                .header {  
                    display: grid;
                    grid-template-columns: 1fr 11fr 3fr 3fr;
                    font-family: Padaloma;
                    color: crimson;
                    font-size: calc(5px + 1vw);
                    border-bottom: 1px dashed;
                }

                #logo {
                    height: 5vh;
                }

                #signin {
                    font-size: calc(2px + 1vw);
                    border: 1px solid;
                    border-radius: 5px;
                    padding: 0.5vh 1.5vw;
                }
            `}</style>
        </div>
    </Container> 
  }
}
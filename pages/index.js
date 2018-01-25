import Layout from '../components/Layout.js'
import { SelfBuildingSquareSpinner } from 'react-epic-spinners'

import Container from '../components/helpers/Container'
import FlexDiv from '../components/helpers/FlexDiv'

const backgrounds = [
    {"name": "bluefish", "color": "#4caaf4"},
    {"name": "burger", "color": "#f4e29b"},
    {"name": "fries", "color": "#f58673"},
    {"name": "dog", "color": "#b5ff54"},
    {"name": "deserts", "color": "#f6a1ff"},
    {"name": "pancakes", "color": "#f8df84"},
    {"name": "meal", "color": "#27ff8b"},
    {"name": "burrito", "color": "#ffcb20"},
    {"name": "sushi", "color": "#ffdbdb"},
    {"name": "coffee", "color": "#ff6464"}
]

const message_cs = {
    width: '70vw',
    height: '70vh',
    margin: '12vh 15vw'
}

const map_cs = {
    width: '90vw',
    height: '90vh',
    margin: '5vh 5vw'
}

const bs = {
    'background-color': 'white',
    opacity: 0.9
}

const Index = (props) => (
    <Layout theme={props.theme}>
        <div className="page">
            <Container cs={message_cs} bs={bs}>
                <div className="message" style={{color: props.theme.color}}>
                    <FlexDiv className="header" position="center">Welcome to Cluckin Bell!</FlexDiv>
                    <FlexDiv className="text" position="center">
                        Here we let you see what delicious food and snacks your favourite fastfood restaurants have today. Surf through endless shops and cafes, review their products and compare prices on the go! Find new places and hurry to buy their tasty burgers, hot pizzas and sweet-sweet coffee!
                    </FlexDiv>
                </div>
            </Container>
        </div>
        <div className="page">
            <Container cs={map_cs} bs={bs}>
                <FlexDiv className="map" position="center">
                    <SelfBuildingSquareSpinner color={props.theme.color} size="100"/>
                </FlexDiv>
            </Container>
        </div>

        <style jsx>{`
            .page {
                height: 100vh;
            }

            .message {
                display: grid;
                grid-template-rows: 1fr 2fr;
                font-size: calc(5px + 2vw);
                width: 90%;
                margin-left: 5%;
            }

            .message .header {
                font-size: calc(5px + 3vw);
            }

            .map {
 
            }

        `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    return {
      theme: backgrounds[Math.floor(Math.random()*backgrounds.length)]
    }
  }

export default Index
// In your render function or SFC return

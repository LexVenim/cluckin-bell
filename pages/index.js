import Layout from '../components/Layout.js'
import { SelfBuildingSquareSpinner } from 'react-epic-spinners'

import Container from '../components/helpers/Container'
import FlexDiv from '../components/helpers/FlexDiv'

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

export default () => (
    <Layout>
        <div className="page">
            <Container cs={message_cs} bs={bs}>
                <div className="message">
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
                    <SelfBuildingSquareSpinner color="#4caaf4" size="100"/>
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
                color: darksalmon;
            }

            .message .header {
                font-size: calc(5px + 3vw);
            }

            .map {
 
            }

        `}</style>
    </Layout>
)
// In your render function or SFC return

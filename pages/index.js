import Layout from '../components/Layout.js'
import { SelfBuildingSquareSpinner } from 'react-epic-spinners'

export default () => (
    <Layout>
        <div className="desc container">
            <div className="background o-75"></div>
            <div className="message container ">
                <div className="bc-white o-90"></div>
                <div className="content">
                    <div className="header center-content">Welcome to Cluckin Bell!</div>
                    <div className="text center-content">
                        Here we let you see what delicious food and snacks your favourite fastfood restaurants have today. Surf through endless shops and cafes, review their products and compare prices on the go! Find new places and hurry to buy their tasty burgers, hot pizzas and sweet-sweet coffee!
                    </div>
                </div>
            </div>
        </div>
        <div className="map container">
            <div className="background o-75"></div>
            <div className="center-content">
                <SelfBuildingSquareSpinner color="red" size="150"/>
            </div>
        </div>

        <style jsx>{`
            .desc {
                height: 85vh;
            }

            .desc .background {
                background-image: url("/static/index.jpeg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }

            .desc .message {
                width: 60vw;
                height: 70vh;
                margin-left: 20vw;
                margin-top: 5vh;
            }

            .desc .message .content {
                display: grid;
                grid-template-rows: 1fr 2fr;
                font-size: calc(5px + 2vw);
                width: 90%;
                margin-left: 5%;
                color: darksalmon;
            }

            .desc .message .content .header {
                font-size: calc(5px + 3vw);
            }

            .map {
                height: 100vh;
                border-top: 4px dashed salmon;   
            }

            .map .background {
                background-image: url("/static/map.jpg");
                background-repeat: no-repeat;
                background-size: auto;
            }
        `}</style>
    </Layout>
)

// In your render function or SFC return

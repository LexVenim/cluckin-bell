import Head from 'next/head'
import ReactDOM from 'react-dom';

import Header from './Header'

const mainGridStyle = function(image) {
  return {
    'background-image': image,
    'background-size': 'cover'
  }
}

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

export default class extends React.Component {
  render() {
    var theme = backgrounds[Math.floor(Math.random()*backgrounds.length)]

    return <div>
      <Head>
        <title>Cluckin Bell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div style={mainGridStyle('url("/static/patterns/' + theme.name + '.jpg")')}>
        <Header color={theme.color}/>
        { this.props.children }
      </div>

      <style jsx global>{`
        @font-face {
          font-family: RR;
          src: url('/static/Roof Runners.ttf');
        }

        html, body {
          margin: 0;
          height: 100%;
          font-family: RR;
        }
      `}</style>
    </div>
  }
}
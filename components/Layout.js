import Head from 'next/head'
import ReactDOM from 'react-dom';

import Header from './Header'

const mainGridStyle = function(image) {
  return {
    'background-image': image,
    'background-size': 'cover'
  }
}

export default class extends React.Component {
  render() {
    return <div>
      <Head>
        <title>Cluckin Bell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div style={mainGridStyle('url("/static/patterns/' + this.props.theme.name + '.jpg")')}>
        <Header color={this.props.theme.color}/>
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
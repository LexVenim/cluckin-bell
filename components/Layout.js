import Head from 'next/head'
import ReactDOM from 'react-dom';

import Header from './Header'

const mainGridStyle = {
  height: '100vh'
}

export default class extends React.Component {
  render() {
    return <div>
      <Head>
        <title>Cluckin Bell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div style={mainGridStyle}>
        <Header />
        { this.props.children }
      </div>

      <style jsx global>{`
        @font-face {
          font-family: Padaloma;
          src: url('/static/Padaloma_i.ttf');
        }

        @font-face {
          font-family: RR;
          src: url('/static/Roof Runners.ttf');
        }

        html, body {
          margin: 0;
          height: 100%;
          font-family: RR;
        }

        .container {
          position: relative;
        }

        .container > div {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
        
        .left-content {
          display: flex;
          justify-content: start;
          align-items: center;
        }

        .center-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .right-content {
          display: flex;
          justify-content: end;
          align-items: center;
        }

        /* background colors */

        .bc-primary, .bc-white {
          background-color: whitesmoke;
        }

        .bc-secondary {
          background-color: darkgrey;
        }

        .bc-above, .bc-positive {
          background-color: seagreen;
        }

        .bc-below, .bc-negative {
          background-color: firebrick;
        }

        /* colors */

        .c-primary {
          color: darkgrey;
        }

        .c-secondary {
          color: whitesmoke;
        }

        .c-below, .c-negative, .c-destroy {
          color: firebrick;
        }

        .c-above, .c-positive, .c-upgrade {
          color: seagreen;
        }

        .c-equal, .c-gold {
          color: gold;
        }

        /* opacity */

        .o-25 {
          opacity: 0.25;
        }

        .o-75 {
          opacity: 0.75;
        }

        .o-90 {
          opacity: 0.90;
        }
      `}</style>
      
      <style jsx>{`
        
      `}</style>

      
    </div>
  }
}
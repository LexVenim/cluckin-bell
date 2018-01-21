import Head from 'next/head'

import ReactDOM from 'react-dom';

export default class extends React.Component {
  render() {
    return <div>
      <Head>
        <title>Cluckin Bell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      { this.props.children }
    </div>
  }
}
import ReactDOM from 'react-dom';

export default class extends React.Component {
  render() {
    return <div className="container" style={this.props.cs}>
        <div style={this.props.bs}></div>
        {this.props.children}

        <style jsx global>{`
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
      `}</style>
      </div>
  }
}
import ReactDOM from 'react-dom';
// import Logo from '../static/logo.png';

export default class extends React.Component {
  render() {
    return <div className="header container"> 
        <div className="background"></div>
        <div className="content">  
            <div className="logo center-content">
                <img src="/static/logo.png" />
            </div>
            <div className="name left-content">
                Cluckin Bell
            </div>
            <div className="buttons center-content">
                TBD
            </div>
            <div className="dropdown center-content">
                TBD
            </div>
        </div>

      <style jsx>{`
        .header {
            height: 6vh;
        }

        .header .content {  
          display: grid;
          grid-template-columns: 1fr 8fr 1fr 2fr;
          font-family: Padaloma;
          color: crimson;
          font-size: calc(5px + 1vw);
        }

        .header .background {
            background:linear-gradient(135deg, #f9735e 0%,#f79888 20%,#fe8972 44%,#ffb07b 72%,#ff785d 100%);
        }

        .header .logo img {
            height: 5vh;
        }
      `}</style>
    </div>
  }
}
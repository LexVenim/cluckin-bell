import ReactDOM from 'react-dom';

const style = function(position) {
    return {
        display: 'flex',
        'justify-content': position == 'left' ? 'flex-start' : (position == 'right' ? 'flex-end' : 'center'),
        'align-items': 'center'
    }
  }

export default class extends React.Component {
  render() {
    return <div className={this.props.className} style={{...this.props.style, ...style(this.props.position)}}>
        {this.props.children}
    </div>
  }
}
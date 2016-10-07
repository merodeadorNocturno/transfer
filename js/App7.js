import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor () {
        super();
        this.state = {
            red: 128,
            green: 128,
            blue: 128
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        });
    }
    render () {
        console.log(this.state);
        return (
            <div>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br />
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br />
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
            </div>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <ColorDisplay ref="rgb" />
                <input type="range"
                min="0"
                max="255"
                onChange={this.props.update} />
            </div>
        );
    }
}

class ColorDisplay extends React.Component {
    render () {
        
        let spanStyle = {
            width: '16px',
            height: '16px',
            display: 'block'
        };
        return (
            <div>
                <span style={spanStyle}></span>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


export default App;
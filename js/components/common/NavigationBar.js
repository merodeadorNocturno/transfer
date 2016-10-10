import React from 'react';

class NavigationBar extends React.Component {
    constructor () {
        super();
        this.state = {
            amount: "0.00"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (value) {
        this.setState({amount: value});
    }

    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar">Transfers</span>
                        <span className="icon-bar">Review</span>
                    </button>
                    <a className="navbar-brand" href="#">Bank Name</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Transfers</a></li>
                            <li><a href="#review">Review</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default NavigationBar;

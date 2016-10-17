import React from 'react';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {
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
                            <li className="active"><a href="#/transfer">Make Transfer</a></li>
                            <li><a href="#/view">View Transfers</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


//export default NavigationBar;

module.exports.NavigationBar = connect(
    (state) => {
        return { selectedMenuItem: state.NavigationBar };
    },
    {
        changeItem: (data) => {
            return { type: 'NEW_SELECTED_ITEM', data };
        }
    }
)(NavigationBar);

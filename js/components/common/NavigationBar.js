import React from 'react';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { NavigationBar } = this.props;
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
                            <li
                                className={NavigationBar.get('transferElement')}
                                    onClick={this.props.changeItem}
                            >
                                <a
                                    id="transfer"
                                    href="#/transfer"
                                    ref="transfer"
                                >Make Transfer</a>
                            </li>
                            <li
                                className={NavigationBar.get('viewElement')}
                                    onClick={this.props.changeItem}
                            >
                                <a
                                    href="#/view"
                                    id="view"
                                
                                >View Transfers</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


//export default NavigationBar;
module.exports.constructor = NavigationBar;
module.exports.NavigationBar = connect(
    (state) => { //console.log('fn', state.NavigationBar);
        return { NavigationBar: state.NavigationBar };
    },
    {
        changeItem: (data) => {
            return { type: 'NEW_SELECTED_ITEM', data };
        }
    }
)(NavigationBar);

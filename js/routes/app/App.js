import React from 'react';
import ReactDOM from 'react-dom';
import TransferForm from '../transfersView/makeTransfer';
import NavigationBar from '../../components/common/NavigationBar';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidUpdate () {

    }

    render () {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <TransferForm />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*App.propTypes = {
    immLoginState: React.PropTypes.object.isRequired,
    immScreenState: React.PropTypes.object.isRequired,
    logoutActions: React.PropTypes.object.isRequired,
    resize: React.PropTypes.func.isRequired,
    children: React.PropTypes.any
};*/

module.exports.constructor = App;
module.exports.App = connect(
    state => ({
        immLoginState: state.login,
        immScreenState: state.screen
    }),
    dispatch => ({
        logoutActions: bindActionCreators(logoutActions, dispatch),
        resize: bindActionCreators(screenActions.resize, dispatch)
    })
)(App);

/*
ReactDOM.render(
    <App />,
    document.getElementById('app')
);*/
/*require('./app.scss');
const Notifications = require('components/commons/notifications/notifications').Notifications;
const VoiceReader = require('components/commons/voiceReader/voiceReader').VoiceReader;
const Storage = require('utilities/storage');
const logoutActions = require('actions/logout');
const React = require('react');
const Header = require('components/header/header');

const topbarLinks = require('../../../bower_components/commons-web/topbar/topbar.json');
const { LOCAL_ENVIRONMENT } = require('constants');
const screenActions = require('actions/screen');
//const debounce = require('lodash/function/debounce');
const { FormattedText, getLanguage } = require('core/i18n').i18n;

class Appi extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.handleExpirationLogin();
        document.querySelector('body').scrollIntoView();
    }

    resize() {
        if (this.props && this.props.resize){
            this.props.resize();
        }
    }

    handleExpirationLogin() {
        const isAuthenticated = this.props.immLoginState.get('isAuthenticated');
        if (isAuthenticated && !this.inactivityChecker) {
            this.inactivityChecker = setInterval(function() {
                if (this.isInactive()) {
                    this.props.logoutActions.logout();
                    this.inactivityChecker = clearInterval(this.inactivityChecker);
                }
            }.bind(this), 5000);
        }
    }

    isInactive() {
        // For DEVELOPMENT we want to avoid a continous logout
        if (__ENVIRONMENT__ === LOCAL_ENVIRONMENT){
            return false;
        }

        const lastActiontime = Storage.sessionStorage.get('lastTimeStamp');
        const currentTime = Date.now();
        const tenMinutesInMiliseconds = 600000;
        return (currentTime - lastActiontime) > tenMinutesInMiliseconds;
    }

    render() {
        const username = this.props.immLoginState.get('name');
        const loggedIn = this.props.immLoginState.get('isAuthenticated');
        const screenSize = this.props.immScreenState.get('device');
        const language = getLanguage();
        return (
            <div className="app__outer">
                <div className="app__block-landscape"></div>
                <div className="app__modal">
                    <FormattedText value="common-rotateYourDevice" format="firstUppercase"/>
                </div>
                <div className="app__content">
                    <Header
                        links={topbarLinks}
                        language={language}
                        username={username}
                        loggedIn={loggedIn}
                        screenSize={screenSize}
                    />
                    {this.props.children}
                    <Notifications/>
                </div>
                <VoiceReader/>
            </div>
        );
    }
}
*/

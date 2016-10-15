import '../transfers/TransferForm.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class AccountNumber extends React.Component {
    componentDidMount () {
        const n = ReactDOM.findDOMNode(this.refs.account_number);
        const addEvent = n.addEventListener || n.attachEvent;

        addEvent("keypress", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        const removeEvent = n.removeEventListener || n.detachEvent;
        removeEvent('keypress', this.handleKeyPress);
    }

    handleKeyPress(n) {
        const limit = /^[0-9]{0,11}$/;
        let target = n.target.value;
        if (!target.match(limit)) {
            n.preventDefault();
        }
    }

    render() {
        const { AccountNumber, htmlForId, label } = this.props;
        let validatedAccount = [];

        return (
            <div className={AccountNumber.get('errored')}>
                <label className="control-label" htmlFor={htmlForId}>
                    {label} {AccountNumber.get('errorMsg')}
                </label>
                <input
                    ref="account_number"
                    type="number"
                    className="form-control"
                    id={htmlForId}
                    placeholder="12 digits"
                    maxLength="12"
                    required={true}
                    onBlur={this.props.limitNumbers}
                    />
            </div>
        );
    }
}


AccountNumber.propTypes = {
    account: React.PropTypes.object,
    handleChange: React.PropTypes.func
};

module.exports.AccountNumber = connect(
    (state) => {
        return { AccountNumber: state.AccountNumber };
    },
    {
        handleChange: (data) => {
            return { type: 'CHANGE_ACCOUNT_NUMBER', data };
        },
        limitNumbers: (data) => {
            let actionType = 'VALIDATE_ACCOUNT_NUMBERS';
            if (data.target.value.length < 12) {
                actionType = 'ERROR_ACCOUNT_NUMBER';
            }
            return { type: actionType, data };
        }
    }
)(AccountNumber);
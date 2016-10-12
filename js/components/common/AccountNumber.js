import '../transfers/TransferForm.scss';
import React from 'react';
import { connect } from 'react-redux';

class AccountNumber extends React.Component {
    render() {
        const { AccountNumber } = this.props;
        console.log('***********', AccountNumber);
        return (
            <div className="form-group">
                    <label htmlFor="accountRemitted">Account to be remitted</label>
                    <input 
                        type="number"
                        className="form-control"
                        id={AccountNumber.get('htmlForId')}
                        value={AccountNumber.get('name')}
                        placeholder="12 digits"
                        pattern="[0-9]{12}"
                        required={true}
                        onBlur={this.props.handleChange}
                        />
            </div>
        );
    }
}

const convertToString = (number) => {
    if (Number.isInteger) {
        return '' + number;
    }
};

const validateNumbers = (string) => string.match(/^[0-9]{12}$/);


AccountNumber.propTypes = {
    account: React.PropTypes.object,
    handleChange: React.PropTypes.func
};

module.exports.AccountNumber = connect(
    (state) => {
        //console.log("state", state);
        return { AccountNumber: state.AccountNumber };
    },
    {
        handleChange: (data) => {
            console.log("handleChange", data);
            return { type: 'CHANGE_ACCOUNT_NUMBER', data };
        }
    }
)(AccountNumber);
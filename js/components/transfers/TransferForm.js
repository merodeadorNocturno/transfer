require('./TransferForm.scss');
import React from 'react';
import CurrencyInput from 'react-currency-input';
import { CurrencyPicker } from '../common/CurrencyPicker';
import { AccountNumber } from '../common/AccountNumber';
import { Scheduler } from './Scheduler';


class TransferForm extends React.Component {
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
            <form className="form">
                <AccountNumber
                    htmlForId="accountRemitted"
                    label="Origin Account"
                />
                <AccountNumber
                    htmlForId="remittanceAccount"
                    label="Recipient Account"
                />
                <CurrencyPicker />
                <div className="form-group">
                    <span>
                    <label>
                        Schedule this operation
                    </label>
                    </span>
                    <span>
                        <input type="checkbox" id="checkboxSchedule" className="form__checkbox"/>
                    </span>
                </div>
                <Scheduler />
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </form>
        );
    }
}

const validateAccount = (account) => {
    let accountMatch = [];
    accountMatch = (account + '').match(/^[0-9]{12}$/);
    if (accountMatch.length) {

    }
};

//console.log(store);

export default TransferForm;
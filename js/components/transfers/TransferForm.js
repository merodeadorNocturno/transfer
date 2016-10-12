require('./TransferForm.scss');
import React from 'react';
import CurrencyInput from 'react-currency-input';
import { CurrencyPicker } from '../common/CurrencyPicker';
import { AccountNumber } from '../common/AccountNumber';

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
                <AccountNumber />
                <div className="form-group">
                    <label htmlFor="remittanceAccount">Remittance Account</label>
                    <input type="number" className="form-control" id="remittanceAccount" placeholder="12 digits" min="000000000000" max="999999999999" required={true}/>
                </div>
                <CurrencyPicker />
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                    <div className="input-group"  id="exampleInputAmount">
                        <div className="input-group-addon">$</div>
                        <input type="number" className="form-control" placeholder="Amount" />
                        <div className="input-group-addon">.00</div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
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
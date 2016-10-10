require('./TransferForm.scss');
import React from 'react';
import CurrencyInput from 'react-currency-input';


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
                <div className="form-group">
                    <label htmlFor="accountRemitted">Account to be remitted!</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="accountRemitted"
                        placeholder="12 digits"
                        min="000000000000"
                        max="999999999999"
                        required={true}/>
                </div>
                <div className="form-group">
                    <label htmlFor="remittanceAccount">Remittance Account</label>
                    <input type="number" className="form-control" id="remittanceAccount" placeholder="12 digits" min="000000000000" max="999999999999" required={true}/>
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
                        <div className="input-group-addon">.00</div>
                    </div>
                </div>
                <div className="checkbox">
                    <span>
                    <label>
                        Schedule this operation
                    </label>
                    </span>
                    <span>
                        <input type="checkbox" id="checkboxSchedule" className="form__checkbox"/>
                    </span>
                </div>
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
import React from 'react';
import CurrencyInput from 'react-currency-input';
import DatePicker from '../common/DatePicker';

class Scheduler extends React.Component {
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
            <form>
                <div className="form-group">
                    <label htmlFor="fromDate">From this date</label><br />
                    <DatePicker id="fromDate" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="untilDate">Until this date</label><br />
                    <DatePicker id="untilDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <CurrencyInput className="form-control" value={this.state.amount} id="amount" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Schedule</button>
                </div>
            </form>
        );
    }
}

export default Scheduler;
import React from 'react';
import CurrencyInput from 'react-currency-input';
import DatePicker from '../common/DatePicker';

class Scheduler extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: "0.00"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ amount: value });
    }

    render() {
        const intervals = ["1-TIME", "WEEKLY", "MONTHLY", "YEARLY"];
        let options = [];
        options = intervals.map((interval, i) => <option key={i} value="{interval}">{interval}</option>);

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
                    <label htmlFor="currencies">Select Periodicity</label>
                    <select id="intervals" className="form-control" name="intervals">
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Schedule</button>
                </div>
            </form>
        );
    }
}

export default Scheduler;
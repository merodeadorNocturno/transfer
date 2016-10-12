import React from 'react';
import CurrencyInput from 'react-currency-input';
import DatePicker from '../common/DatePicker';
import Select from 'react-select';

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
        //options = intervals.map((interval, i) => <option key={i} value="{interval}">{interval}</option>);
        const options = intervals.map((interval, i) => ({value: interval, label:interval}));

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="fromDate">From this date</label><br />
                    <DatePicker id="fromDate" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="untilDate">Until this date</label><br />
                    <DatePicker id="untilDate" />
                </div>
                <div className="form-group">
                <label htmlFor="currencies">Select Currency</label>
                <Select
                    className="form__currency-picker"
                    name="form-field-name"
                    options={options}
                    onChange={this.props.changeSelect}
                    clearable={false}
                    searchable={false}
                />
                </div>
            </div>
        );
    }
}

export default Scheduler;
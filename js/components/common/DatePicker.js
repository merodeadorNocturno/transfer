import React from 'react';
import DateSelect from 'react-datepicker';
import moment from 'moment';

class DatePicker extends React.Component {
    constructor () {
        super();
        this.state = {startDate: moment() };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (date) {
        this.setState({startDate: date});
    }

    render () {
        return (
            <DateSelect
                className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange} />
        );
    }
}

export default DatePicker;
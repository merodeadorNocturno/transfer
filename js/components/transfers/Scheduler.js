import React from 'react';
import CurrencyInput from 'react-currency-input';
import DatePicker from '../common/DatePicker';
import Select from 'react-select';
import { connect } from 'react-redux';

class Scheduler extends React.Component {
    render() {
        const { selectedPeriodicity } =  this.props;

        const intervals = ["1-TIME", "WEEKLY", "MONTHLY", "YEARLY"];
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
                    <label htmlFor="currencies">Select Periodicity</label>
                    <Select
                        className="form__periodicity-picker"
                        name="form-periodicity-picker"
                        options={options}
                        onChange={this.props.changePeriodicity}
                        clearable={false}
                        searchable={false}
                        value={selectedPeriodicity.get('selectedPeriodicity')}
                    />
                </div>
            </div>
        );
    }
}

Scheduler.propTypes = {
    selectedPeriodicity: React.PropTypes.object
};

module.exports.Scheduler = connect(
    (state) => {
        return { selectedPeriodicity: state.Scheduler };
    },
    {
        changePeriodicity: (data) => {
            return {type: 'CHANGE_PERIODICITY', data};
        }
    }
)(Scheduler);
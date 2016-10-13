import './react-select.scss';
import React from 'react';
import Select from 'react-select';
import { Amount } from './Amount';
import { connect } from 'react-redux';

class CurrencyPicker extends React.Component {
    render() {
        const currencies = [
            'USD', 'EUR', 'GBP', 'CAD', 'ARS', 'AUD', 'BBD', 'BDT', 'BSD', 'BHD', 'BRL', 'BOB', 'BND', 'BGN', 'MMK', 'KYD', 'CLP', 'CNY', 'COP', 'CRC', 'HRK', 'CZK', 'DKK', 'DOP', 'XCD', 'EGP', 'XPF', 'FJD', 'GHS', 'GTQ', 'GYD', 'GEL', 'HKD', 'HUF', 'ISK', 'INR', 'IDR', 'NIS', 'JMD', 'JPY', 'JOD', 'KZT', 'KES', 'KWD', 'LVL', 'LTL', 'MXN', 'MYR', 'MUR', 'MDL', 'MAD', 'MNT', 'MZN', 'ANG', 'NZD', 'NGN', 'NOK', 'OMR', 'PKR', 'PYG', 'PEN', 'PHP', 'PLN', 'QAR', 'RON', 'RUB', 'SAR', 'RSD', 'SCR', 'SGD', 'SYP', 'ZAR', 'KRW', 'LKR', 'SEK', 'CHF', 'TWD', 'THB', 'TZS', 'TTD', 'TRY', 'UAH', 'AED', 'UYU', 'VEB', 'VND', 'ZMK'
        ];
        
        const options = currencies.map((curr, i) => ({value: curr, label: curr}));
        const { selectedCurrency } = this.props;

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="currencies">Select Currency</label>
                    <Select
                        className="form__currency-picker"
                        name="form-field-name"
                        options={options}
                        value={selectedCurrency.get('selectedCurrency')}
                        onChange={this.props.changeSelect}
                        clearable={false}
                        searchable={false}
                        onBlur={this.props.onBlurPicker}
                    />
                </div>
                <Amount
                    currency={selectedCurrency.get('selectedCurrency')}
                />
            </div>
        );
    }
}

CurrencyPicker.propTypes = {
    selectedCurrency: React.PropTypes.object,
    changeSelect: React.PropTypes.func
};

module.exports.CurrencyPicker = connect (
    (state) => {
        return {selectedCurrency: state.CurrencyPicker};
    },
    {
        changeSelect: (data) => {
            return {type: 'CHANGE_VALUE', data};
        },
        onBlurPicker: (data) => { console.log('blur');
            return {type: 'CHANGE_CURRENCY', data};
        }
    }
)(CurrencyPicker);
import React from 'react';

class CurrencyPicker extends React.Component {
    render () {
    const currencies = [
        'USD','EUR','GBP','CAD','ARS','AUD','BBD','BDT','BSD','BHD','BRL','BOB','BND','BGN','MMK','KYD','CLP','CNY','COP','CRC','HRK','CZK','DKK','DOP','XCD','EGP','XPF','FJD','GHS','GTQ','GYD','GEL','HKD','HUF','ISK','INR','IDR','NIS','JMD','JPY','JOD','KZT','KES','KWD','LVL','LTL','MXN','MYR','MUR','MDL','MAD','MNT','MZN','ANG','NZD','NGN','NOK','OMR','PKR','PYG','PEN','PHP','PLN','QAR','RON','RUB','SAR','RSD','SCR','SGD','SYP','ZAR','KRW','LKR','SEK','CHF','TWD','THB','TZS','TTD','TRY','UAH','AED','UYU','VEB','VND','ZMK'
    ];

    let options = [];
    options = currencies.map((curr, i) => <option key={i} value="{curr}">{curr}</option>);
    
    return (
        <div className="form-group">
            <label htmlFor="currencies">Select Currency</label>
            <select id="currencies" className="form-control" name="currencies" value="currencies">
                <option value="currencies">Currency</option>
                {options}
            </select>
      </div>
        );
    }
}

export default CurrencyPicker;
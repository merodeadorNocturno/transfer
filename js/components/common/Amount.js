import React from 'react';
import { connect } from 'react-redux';

class Amount extends React.Component {
    render() {
        const { Amount, currency } = this.props;
        return (
            <div className="form-group">
                <label className="control-label" htmlFor="amount">
                    Amount
                </label>
                <div className="input-group" id="amountDiv">
                    <div className="input-group-addon">{currency}</div>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        placeholder="Amount"
                        onChange={this.props.onChangeAmount}
                    />
                    <div className="input-group-addon">.00</div>
                </div>
            </div>
        );
    }
}

Amount.propTypes = {
    "currency": React.PropTypes.string
};

module.exports.Amount = connect(
    (state) => {
        //console.log(state);
        return { Amount: state.Amount };
    },
    {
        onChangeAmount: (data) => {
            return { type: 'CHANGE_AMOUNT', data };
        }
    }
)(Amount);
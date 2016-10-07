import React from 'react';
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
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>From Account</th><th>To Account</th><th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active">
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>16.00</td>
                    </tr>
                    <tr className="success">
                        <td>314159265358</td>
                        <td>161292583469</td>
                        <td>1024.00</td>
                    </tr>
                    <tr className="warning">
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>345.00</td>
                    </tr>
                    <tr className="danger">
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>98.36</td>
                    </tr>
                    <tr className="info">
                        <td>314159265358</td>
                        <td>161292583469</td>
                        <td>69.71</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Scheduler;
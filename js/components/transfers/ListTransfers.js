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
            <table className="table table-condensed table-bordered">
                <thead className="thead-inverse">
                    <tr>
                        <th>Date</th>
                        <th>From Account</th>
                        <th>To Account</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="success">
                        <td>2016-10-03</td>
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>16.00</td>
                    </tr>
                    <tr className="danger">
                        <td>2016-10-03</td>
                        <td>314159265358</td>
                        <td>161292583469</td>
                        <td>1024.00</td>
                    </tr>
                    <tr className="success">
                        <td>2016-10-02</td>
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>345.00</td>
                    </tr>
                    <tr className="danger">
                        <td>2016-09-23</td>
                        <td>161292583469</td>
                        <td>314159265358</td>
                        <td>98.36</td>
                    </tr>
                    <tr className="success">
                        <td>2016-09-21</td>
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
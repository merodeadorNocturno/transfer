import React from 'react';
import ReactDOM from 'react-dom';
import TransferForm from '../../components/transfers/TransferForm';
import Scheduler from '../../components/transfers/Scheduler';
import NavigationBar from '../../components/common/NavigationBar';

class MainBank extends React.Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <TransferForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBank;
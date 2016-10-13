import React from 'react';
import ReactDOM from 'react-dom';
import { TransferForm } from '../transfers/TransferForm';
import Scheduler from '../transfers/Scheduler';
import NavigationBar from './NavigationBar';

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
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <Scheduler />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBank;
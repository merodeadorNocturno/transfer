import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import ListTransfers from '../../components/transfers/ListTransfers';

class MainBank extends React.Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-8">
                            <ListTransfers />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBank;
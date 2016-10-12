import React from 'react';
import NavigationBar from '../../components/common/NavigationBar';
import Modal from 'react-modal';

class Success extends React.Component {
    render () {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-8">
                            <Modal
                                isOpen={true}
                                closeTimeoutMS={2600}
                            >
                            <h2>Successful Transaction</h2>
                            </Modal>
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

export default Success;
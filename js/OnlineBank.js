import React from 'react';
import ReactDOM from 'react-dom';
import MainBank from './components/common/MainBank';

class OnlineBank extends React.Component {
    render () {
        return (
            <MainBank />
        );
    }
}

ReactDOM.render(
    <OnlineBank />,
    document.getElementById('app')
);

export default OnlineBank;

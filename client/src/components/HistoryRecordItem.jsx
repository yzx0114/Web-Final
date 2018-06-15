import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';

class HistoryRecordItem extends React.Component {
    static propTypes = {
        id : PropTypes.string,
        name : PropTypes.string,
        money : PropTypes.string,
        date : PropTypes.string,
        repayDate : PropTypes.string
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {name,money,date,repayDate} = this.props;
        return (
            <div className='record-item row container'>
                <div className='person-info col-sm-9 col-xl-9 row'>
                    <div className='picture col-sm-2 col-xl-2 align-self-center'>
                        <img className="rounded-circle" src="./images/icon.png" width="50" height="50"/> 
                    </div>
                    <div className='name col-sm-3 col-xl-3 align-self-center'>
                        {name}
                    </div>
                    <div className='money col-sm-3 col-xl-3 align-self-center'>
                        ${money}
                    </div>
                    <div className='date col-sm-4 col-xl-4 align-self-center'>
                        {date}
                    </div>
                </div>
                <div className='date col-sm-3 col-xs-3 align-self-center'>
                    {repayDate}
                </div>
            </div>
        );
    }
}

export default connect(state => ({

}))(HistoryRecordItem);
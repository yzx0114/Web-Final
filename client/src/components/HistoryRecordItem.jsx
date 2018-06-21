import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';

class HistoryRecordItem extends React.Component {
    static propTypes = {
        record_id : PropTypes.number,
        name : PropTypes.string,
        amount : PropTypes.number,
        expect_date : PropTypes.string,
        repay_date : PropTypes.string
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {name,amount,expect_date,repay_date} = this.props;
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
                        ${amount}
                    </div>
                    <div className='date col-sm-3 col-xl-3 align-self-center'>
                        {expect_date}
                    </div>
                </div>
                <div className='date col-sm-3 col-xs-3 align-self-center'>
                    {repay_date}
                </div>
            </div>
        );
    }
}

export default connect(state => ({

}))(HistoryRecordItem);
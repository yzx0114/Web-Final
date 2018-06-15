import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import {createAlert} from 'states/main-actions.js';
import './RecordItem.css';

class BorrowRecordItem extends React.Component {
    static propTypes = {
        id : PropTypes.string,
        name : PropTypes.string,
        money : PropTypes.string,
        date : PropTypes.string,
        dispatch:PropTypes.func,
    };
    constructor(props) {
        super(props);
        this.handleRemind = this.handleRemind.bind(this);
    }

    render() {
        const {name,money,date} = this.props;
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
                <div className='buttons col-sm-3 col-xl-3 align-self-center'>
                    <div className='row'>
                        <div className='mx-auto'>
                            <Button type="button" className="btn btn-success">已還款</Button>
                        </div>
                        </div>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-warning" onClick={this.handleRemind}>提醒他</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-danger">刪除</Button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
    handleRemind(){
        this.props.dispatch(createAlert(this.props.name,this.props.money,this.props.date));
    }
}
export default connect(state => ({
    alerts:state.main.alerts
}))(BorrowRecordItem);
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';

export class RecordItem extends React.Component {
    static propTypes = {
        id : PropTypes.number,
        name : PropTypes.string,
        money : PropTypes.number,
        date : PropTypes.string,
        recordType : PropTypes.string
    };
    constructor(props) {
        super(props);
    }

    render() {
        const {name,money,date,recordType} = this.props;
        const buttonClts = (recordType == 'borrow')? true:false;
        return (
            <div className='record-item row'>
                <div className='person-info col-lg-9 row'>
                    <div className='picture col-lg-2 align-self-center'>
                        <img className="rounded-circle" src="./images/icon.png" width="50" height="50"/> 
                    </div>
                    <div className='name col-lg-3 align-self-center'>
                        {name}
                    </div>
                    <div className='money col-lg-3 align-self-center'>
                        ${money}
                    </div>
                    <div className='date col-lg-4 align-self-center'>
                        {date}
                    </div>
                </div>
                {buttonClts ?
                    <div className='buttons col-lg-3 align-self-center'>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-success">已還款</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-warning">提醒他</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-danger">刪除</Button>
                            </div>
                        </div>
                    </div>
                :
                    <div className='buttons col-lg-3 align-self-center'>
                        <div className='row'>
                            <div className='mx-auto'>
                                <Button type="button" className="btn btn-warning">已還款!<br/>提醒他</Button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
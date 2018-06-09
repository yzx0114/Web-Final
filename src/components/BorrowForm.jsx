import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BorrowRecordList} from './BorrowRecordList.jsx';
import './BorrowForm.css';

export class BorrowForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='borrow-form'>
                <div className='list'>
                    <BorrowRecordList />
                </div>
            </div>
    )}
}
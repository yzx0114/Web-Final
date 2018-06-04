import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RecordList} from './RecordList.jsx';
import './BorrowForm.css';

export class BorrowForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {recordType} = this.props;
        return (
            <div className='borrow-form'>
                <div className='list'>
                    <RecordList recordType={recordType}/>
                </div>
            </div>
    )}
}
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ArrearRecordList} from './ArrearRecordList.jsx';
import './ArrearForm.css';

export class ArrearForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='arrear-form'>
                <div className='list'>
                    <ArrearRecordList />
                </div>
            </div>
    )}
}
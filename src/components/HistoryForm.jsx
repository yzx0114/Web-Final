import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {HistoryRecordList} from './HistoryRecordList.jsx';
import './HistoryForm.css';

export class HistoryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='history-form'>
                <div className='list'>
                    <HistoryRecordList />
                </div>
            </div>
    )}
}
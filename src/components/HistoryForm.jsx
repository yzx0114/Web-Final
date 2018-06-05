import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RecordList} from './RecordList.jsx';
import './HistoryForm.css';

export class HistoryForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {recordType} = this.props;
        return (
            <div className='history-form'>
                <div className='list'>
                    <RecordList recordType={recordType}/>
                </div>
            </div>
    )}
}
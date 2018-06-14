import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import HistoryRecordList from './HistoryRecordList.jsx';
import {listHistoryRecords} from 'states/history-actions.js';
import './HistoryForm.css';

class HistoryForm extends React.Component {
    static propTypes = {
        historyRecords: PropTypes.array,
        recordLoading: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(listHistoryRecords());
    }

    render() {
        const {recordLoading} = this.props;

        return (
            <div className='history-form'>
                <div className='list'>
                    <HistoryRecordList />{
                        recordLoading &&
                        <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
    )}
}

export default connect(state => ({
    recordLoading: state.history.recordLoading
}))(HistoryForm);

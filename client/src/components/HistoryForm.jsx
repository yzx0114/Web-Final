import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import HistoryRecordList from './HistoryRecordList.jsx';
import { listHistoryRecords } from 'states/history-actions.js';
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
        localStorage.setItem('mode','history');
    }

    render() {
        const { recordLoading } = this.props;
        let children = (<div className='image0'><img className='image0' src="../../image/no-record1.png" /></div>);
        if (this.props.historyRecords.length) {
            children = (
                <div className='person-info col-sm-12 col-xl-12 row' >
                    <div className='name col-sm-3 col-xl-3'>
                        <span style={{ color: "red", fontWeight: "bold" }}>借</span>
                        <span>/</span>
                        <span style={{ color: "green", fontWeight: "bold" }}>欠</span>
                        <span>款人</span>
                    </div>
                    <div className='money col-sm-3 col-xl-3'>
                        金額
              </div>
                    <div className='date col-sm-3 col-xl-3'>
                        預計還款日
              </div>
                    <div className='done-date col-sm-3 col-xl-3'>
                        還款日
              </div>
                </div>
            );
        }
        return (
            <div className='history-form'>
                <div className='list'>
                    <div className='header container'>
                        {children}


                    </div>
                    <HistoryRecordList />{
                        recordLoading &&
                        <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    recordLoading: state.history.recordLoading,
    historyRecords: state.history.historyRecords
}))(HistoryForm);

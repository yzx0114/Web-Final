import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import BorrowRecordList from 'components/BorrowRecordList.jsx';
import { listBorrowRecords } from 'states/borrow-actions.js';
import AlertList from './AlertList.jsx';
import { listAlerts } from 'states/main-actions.js';
import './BorrowForm.css';

class BorrowForm extends React.Component {
    static propTypes = {
        borrowRecords: PropTypes.array,
        recordLoading: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(listBorrowRecords());
        this.props.dispatch(listAlerts());
    }

    render() {
        const { recordLoading } = this.props;

        return (

            <div className='borrow-form'>
                <div className='list'>
                    <AlertList />
                    <div className='header container'>
                        <div className='person-info col-sm-12 col-xl-12 row' >
                            <div className='name col-sm-3 col-xl-3'>
                                欠款人
                                </div>
                            <div className='money col-sm-3 col-xl-3'>
                                金額
                                </div>
                            <div className='date col-sm-3 col-xl-3'>
                                預計還款日
                                </div>
                            <div className='date col-sm-3 col-xl-3'>

                            </div>
                        </div>
                    </div>
                </div>
                <BorrowRecordList />{
                    recordLoading &&
                    <Alert color='warning' className='loading'>Loading...</Alert>
                }
            </div>

        )
    }
}

export default connect(state => ({
    recordLoading: state.borrow.recordLoading
}))(BorrowForm);


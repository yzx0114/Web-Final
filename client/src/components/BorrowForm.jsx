import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import BorrowRecordList from 'components/BorrowRecordList.jsx';
import {listBorrowRecords} from 'states/borrow-actions.js';
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
    }

    render() {
        const {recordLoading} = this.props;
        return (
            <div className='borrow-form'>
                
                <div className='list'>
                    <BorrowRecordList />{
                        recordLoading &&
                        <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
    )}
}

export default connect(state => ({
    recordLoading: state.borrow.recordLoading
}))(BorrowForm);


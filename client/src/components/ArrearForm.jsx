import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import ArrearRecordList from './ArrearRecordList.jsx';
import {listArrearRecords} from 'states/arrear-actions.js';
import './ArrearForm.css';

class ArrearForm extends React.Component {
    static propTypes = {
        arrearRecords: PropTypes.array,
        recordLoading: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(listArrearRecords());
    }

    render() {
        const {recordLoading} = this.props;

        return (
            <div className='arrear-form'>
                <div className='list'>
                    <ArrearRecordList />{
                        recordLoading &&
                        <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
    )}
}

export default connect(state => ({
    recordLoading: state.arrear.recordLoading
}))(ArrearForm);

import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import ArrearRecordList from './ArrearRecordList.jsx';
import { listFriend } from 'states/friend-actions.js';
import FriendList from './FriendList.jsx';
import './ArrearForm.css';

class FriendForm extends React.Component {
    static propTypes = {
      disoatch:PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(listFriend(localStorage.getItem('Account')));
    }

    render() {
        const {recordLoading} = this.props;
        return (
            <div className='arrear-form'>
                <div className='list'>
                <FriendList />{
                    recordLoading &&
                      <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    recordLoading: state.arrear.recordLoading,
    arrearRecords: state.arrear.arrearRecords
}))(FriendForm);

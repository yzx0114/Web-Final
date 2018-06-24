import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { listFriend, showDetail } from 'states/friend-action.js';
import FriendList from './FriendList.jsx';
import './ArrearForm.css';

class FriendForm extends React.Component {
    static propTypes = {
      disoatch:PropTypes.func,
      recordLoading:PropTypes.bool,
      friendRecords: PropTypes.array
    };

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        localStorage.removeItem('friend-account')
        this.props.dispatch(listFriend(localStorage.getItem('Account')));
    }

    render() {
        const {recordLoading} = this.props;
        return (
            <div className='arrear-form'>

                <div className='list'>
                <FriendList />{
                    recordLoading &&
                      <Alert hidden color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
        )
    }

}

export default connect(state => ({
    recordLoading: state.arrear.recordLoading,
    friendRecords: state.arrear.friendRecords
}))(FriendForm);

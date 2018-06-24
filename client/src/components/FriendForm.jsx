import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { listFriend } from 'states/friend-action.js';
import FriendList from './FriendList.jsx';
import './ArrearForm.css';
import './FriendForm.css';
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
        localStorage.setItem('friend_account','');
        this.props.dispatch(listFriend(localStorage.getItem('Account')));
    }

    render() {
        const {recordLoading} = this.props;
        return (
                <div className='list'>
                <FriendList />{
                    recordLoading &&
                      <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
        )
    }

}

export default connect(state => ({
    recordLoading: state.arrear.recordLoading,
    friendRecords: state.arrear.friendRecords
}))(FriendForm);

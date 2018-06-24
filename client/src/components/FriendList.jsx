import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import FriendItem from './FriendItem.jsx';
import {showDetail} from 'states/friend-action.js';
import './RecordList.css';

class ArrearRecordList extends React.Component {
    static propTypes = {
        friendRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
          this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {friendRecords } = this.props;

        let children = (
            <div></div>
        );

        if (friendRecords.length) {
            children = friendRecords.map(p => (
                <ListGroupItem key={p.account} color={(localStorage.getItem('friend_account') == p.account)?'info':''}action>
                    <FriendItem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='record-list'>
                <ListGroup>
                  <ListGroupItem key='all' onClick={this.handleClick} action>
                    顯示全部
                  </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    {children}
                </ListGroup>
            </div>
        );
    }
    handleClick()
    {
        this.props.dispatch(showDetail(''));
        localStorage.removeItem('friend_account');
    }
}

export default connect(state => ({
    friendRecords: state.friend.friendRecords
}))(ArrearRecordList);

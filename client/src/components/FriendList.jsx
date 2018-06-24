import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import FriendItem from './FriendItem.jsx';
import './RecordList.css';

class ArrearRecordList extends React.Component {
    static propTypes = {
        friendRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {friendRecords } = this.props;

        let children = (
            <div></div>
        );

        if (friendRecords.length) {
            children = friendRecords.map(p => (
                <ListGroupItem key={p.account} action>
                    <FriendItem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='record-list'>
                <ListGroup>
                    {children}
                </ListGroup>
            </div>
        );
    }
}

export default connect(state => ({
    friendRecords: state.friend.friendRecords
}))(ArrearRecordList);

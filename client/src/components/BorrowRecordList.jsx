import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import BorrowRecordItem from './BorrowRecordItem.jsx';
import './RecordList.css';
import './RecordItem.css';
class BorrowRecordList extends React.Component {
    static propTypes = {
        borrowRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { borrowRecords } = this.props;

        let children = (
            <div></div>
        );

        if (borrowRecords.length) {
            children = borrowRecords.map(p => (
                <ListGroupItem color={p.confirm ? '' : 'danger'} key={p.record_id} action>
                    <BorrowRecordItem {...p} />
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
    borrowRecords: state.borrow.borrowRecords
}))(BorrowRecordList);

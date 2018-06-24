import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import ArrearRecordItem from './ArrearRecordItem.jsx';
import './RecordList.css';

class ArrearRecordList extends React.Component {
    static propTypes = {
        arrearRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { arrearRecords } = this.props;

        let children = (
            <div></div>
        );

        if (arrearRecords.length) {
            children = arrearRecords.map(p => (
                <ListGroupItem color={p.confirm ? '' : 'danger'} key={p.record_id} action>
                    <FriendItem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='record-list'>
                <ListGroup>
                3333
                    //{children}
                </ListGroup>
            </div>
        );
    }
}

export default connect(state => ({
    arrearRecords: state.arrear.arrearRecords
}))(ArrearRecordList);

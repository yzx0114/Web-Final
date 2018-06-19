import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';
import HistoryRecordItem from './HistoryRecordItem.jsx';
import './RecordList.css';

class HistoryRecordList extends React.Component {
    static propTypes = {
        historyRecords: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {historyRecords} = this.props;

        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No record here.</div>
            </ListGroupItem>
        );
        
        if (historyRecords.length) {
            children = historyRecords.map(p => (
                <ListGroupItem key={p.id} action>
                    <HistoryRecordItem {...p}/>
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

export default connect(state =>({
    historyRecords:state.history.historyRecords
}))(HistoryRecordList);
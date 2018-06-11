import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';
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
        const {arrearRecords} = this.props;

        let records = [
            {   
                id : 1,
                name : 'Turtle',
                money : 100,
                date : '2018-04-22'
            },
            {   
                id : 2,
                name : 'Shan',
                money : 10,
                date : '2018-04-23'
            }
        ]; 
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No record here.</div>
            </ListGroupItem>
        );
        
        if (arrearRecords.length) {
            children = arrearRecords.map(p => (
                <ListGroupItem key={p.id} action>
                    <ArrearRecordItem {...p}/>
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
    arrearRecords:state.arrear.arrearRecords
}))(ArrearRecordList);
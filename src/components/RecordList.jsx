import React from 'react';
import PropTypes from 'prop-types';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';
import {RecordItem} from './RecordItem.jsx';
import './RecordList.css';

export class RecordList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {recordType} = this.props;
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
        
        if (records.length) {
            children = records.map(p => (
                <ListGroupItem key={p.id} action>
                    <RecordItem {...p} recordType={recordType}/>
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
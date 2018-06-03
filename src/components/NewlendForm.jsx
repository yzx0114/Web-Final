import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
} from 'reactstrap';
import {connect} from 'react-redux';
import './NewlendForm.css';

export class NewlendForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='newlend-form'>
            <h5>對方帳號
                <span><Input className='input' type='textarea'></Input></span>
            </h5>
            <h5>金額
                <Input className='input' type='textarea'></Input>
            </h5>
            <h5>預計還錢日期
                <Input className='input' type='textarea'></Input>
            </h5>    
            <Button className='btn-submit align-self-end' color="info">Submit</Button>
            </div>
    )}
}
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import {connect} from 'react-redux';
import './NewlendForm.css';
import {inputAccount, inputValue, inputDate, inputDanger, submit} from 'states/newlendform-actions.js';

class NewlendForm extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        inputAccount: PropTypes.string,
        inputValue: PropTypes.string,
        inputDate: PropTypes.string,
        inputDangre: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleSummit = this.handleSummit.bind(this);
        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    render() {
        const {inputAccount, inputValue, inputDate} = this.props;
        const inputDanger = this.props.inputDanger ? 'has-danger' : '';

        return (
            <div className='newlend-form'>
            <Alert color='info' className={`d-flex flex-column justify-content-center ${inputDanger}`}>
                <FormGroup>
                    <Label for="exampleText">對方帳號</Label>
                    <Input type="textarea" name="text" id="exampleText" value={inputAccount} onChange={this.handleAccountChange} placeholder='請輸入對方帳號'/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">金額</Label>
                    <Input type="textarea" name="text" id="exampleText" value={inputValue} onChange={this.handleValueChange} placeholder='請輸入金額'/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">預計還款日</Label>
                    <Input type="date" name="date" id="exampleDate" value={inputDate} onChange={this.handleDateChange} placeholder="date placeholder" />
                </FormGroup>
                <Button className='btn-submit align-self-end' color="info" onClick={this.handleSummit}>Submit</Button>
            </Alert>
            </div>
    )}

    handleAccountChange(e) {
        const account = e.target.value;
        console.log(account);
        this.props.dispatch(inputAccount(account));
        if (account && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleValueChange(e) {
        const value = e.target.value;
        console.log(value);
        this.props.dispatch(inputValue(value));
        if (value && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }
    handleDateChange(e) {
        const date = e.target.value;
        console.log(date);
        this.props.dispatch(inputDate(date));
        if (date && this.props.inputDanger) {
            this.props.dispatch(inputDanger(false));
        }
    }

    handleSummit() {
        if (!this.props.inputAccount)
            return;
        if (!this.props.inputValue)
            return;
        if (!this.props.inputDate)
            return;
        
        alert('已創建一筆新借款');
        this.props.dispatch(submit(this.props.inputAccount, this.props.inputValue, this.props.inputDate));

        this.props.dispatch(inputAccount(''));
        this.props.dispatch(inputValue(''));
        this.props.dispatch(inputDate(''));
    }
}
export default connect(state => ({
    ...state.newlendForm
}))(NewlendForm);
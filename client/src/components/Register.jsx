import React from 'react';
import PropTypes from 'prop-types';
import { Change0, Change1, Change2, Change3, Clear, register } from 'states/login-actions.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button,
    Container,
    Row,
    Col,
    Label
} from 'reactstrap';
import { connect } from 'react-redux';
import Login from 'components/Login.jsx';
import './Register.css';
class Register extends React.Component {
    static propTypes = {
        RegisterLoading: PropTypes.bool,
        RegisterState: PropTypes.number,
        RegisterAccount: PropTypes.string,
        RegisterPassword: PropTypes.string,
        RegisterPasswordAgain: PropTypes.string,
        RegisterName: PropTypes.string,
        dispatch: PropTypes.func
    };


    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange0 = this.handleChange0.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    componentDidMount() {
        /*
        if(this.props.RegisterState == 1)
        {
          this.props.history.push('/');
        }
        else if(this.props.RegisterState == 2)
        {
          alert('帳號已存在');
          this.props.dispatch(setRegisterState(0));
        }*/
    }
    render() {
        return (
            <Router>
                <div className='register'>
                    <div className="wrapper" >
                        <div className='content'>
                            <Container >
                                <div className='header'>Join Us Now!</div>
                                <Row className='row'>
                                    <Col>
                                        <Label>請輸入姓名</Label>
                                        <Input type="text" placeholder="Please Enter Your Name" value={this.props.RegisterName} onChange={this.handleChange0} required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>請輸入帳號</Label>
                                        <Input type="text" placeholder="Please Enter Your Account" value={this.props.RegisterAccount} onChange={this.handleChange1} required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>請輸入密碼</Label>
                                        <Input type="password" placeholder="Please Enter Your Password" value={this.props.RegisterPassword} onChange={this.handleChange2} required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>請再次輸入密碼</Label>
                                        <Input type="password" placeholder="Please Enter Your Password Again" value={this.props.RegisterPasswordAgain} onChange={this.handleChange3} required />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='button1' outline color="info" onClick={this.handleSubmit}>送出</Button>
                                        <Button className='button2' outline color="info" onClick={this.handleCancel}>取消</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
    handleChange0(e) {
        const text = e.target.value;
        console.log(text);
        this.props.dispatch(Change0(text));
    }
    handleChange1(e) {
        const text = e.target.value;
        this.props.dispatch(Change1(text));
    }
    handleChange2(e) {
        const text = e.target.value;
        this.props.dispatch(Change2(text));
    }
    handleChange3(e) {
        const text = e.target.value;
        this.props.dispatch(Change3(text));
    }
    handleSubmit() {
        if (this.props.RegisterPassword != this.props.RegisterPasswordAgain) {
            alert('兩次密碼不一樣');
            return;
        }
        this.props.dispatch(register(this.props.RegisterName, this.props.RegisterAccount, this.props.RegisterPassword));
        this.props.dispatch(Clear());
        this.props.history.push('/');
    }
    handleCancel() {
        this.props.history.push('/');
    }
}

export default withRouter(connect(state => ({
    ...state.register
}))(Register))

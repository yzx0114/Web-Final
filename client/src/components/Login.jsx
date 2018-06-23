import React from 'react';
import PropTypes from 'prop-types';
import { AccountChange, PasswordChange, login } from 'states/login-actions.js';
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
    Label,
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import { connect } from 'react-redux';
/*
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import {setSearchText} from 'states/post-actions.js';
import {toggleNavbar} from 'states/main-actions.js';

import './Main.css';
*/
import Register from 'components/Register.jsx'
import Main from 'components/Main.jsx';
import './Login.css';
class Login extends React.Component {
    static propTypes = {
        LoginLoading: PropTypes.bool,
        LoginAccount: PropTypes.string,
        LoginPassword: PropTypes.string,
        dispatch: PropTypes.func,
        Accept: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            showerror: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleAccount = this.handleAccount.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);

    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if ('Account' in localStorage) {
            this.props.history.push('/main');
        }
    }
    componentDidMount() {

        document.addEventListener("keydown", this.handleKeypress, false);
        if (localStorage.getItem('Account') !== null) {

            this.props.history.push('/main');
        }
    }
    render() {
        return (
            <Router>
                <div className='login'>
                    <div className='content'>
                        <Container>
                            <Row>
                                <Col className='col1'>
                                    <div className="header">
                                        Salmoney
                        </div>
                                    <div className="icon">
                                        <img src={require('../image/LPICON.png')} className='image' />
                                    </div>
                                </Col>

                                <Col>
                                    <div className="message">
                                        <Container>
                                            <Row>
                                                <Col className="account">
                                                    <Label>帳號</Label>
                                                    <Input className='input' type="text" value={this.props.LoginAccount} placeholder="Please Enter Your Account" onChange={this.handleAccount} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className='password'>
                                                    <Label>密碼</Label>
                                                    <Input className='input' type="password" placeholder="Please Enter Your Password" value={this.props.LoginPassword} onChange={this.handlePassword} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <div className='buttonRow'>
                                                        <Button className='button1' outline color="info" onClick={this.handleLogin}>Login</Button>
                                                        <Button className='button2' outline color="info" onClick={this.handleRegister}>Sign up</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                            </Row>


                        </Container>


                    </div>
                </div>
            </Router>
        );
    }
    handleAccount(e) {
        const text = e.target.value;

        this.props.dispatch(AccountChange(text));
    }
    handleKeypress(e) {
        if (e.keyCode === 13) this.handleLogin();
    }
    handlePassword(e) {
        const text = e.target.value;
        this.props.dispatch(PasswordChange(text));
    }
    handleLogin() {
        localStorage.clear();
        new Promise((resolve, reject) => {
            this.props.dispatch(login(this.props.LoginAccount, this.props.LoginPassword));
            return resolve();
        }).then(() => {
            this.setState({
                showerror: true
            });
        })
    }
    handleRegister() {
        this.props.dispatch(AccountChange(''));
        this.props.dispatch(PasswordChange(''));
        this.props.history.push('/register');
    }
}

export default withRouter(connect(state => ({
    ...state.login
}))(Login))

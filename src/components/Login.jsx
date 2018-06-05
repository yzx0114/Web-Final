import React from 'react';
import PropTypes from 'prop-types';
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
import {connect} from 'react-redux';
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
		loginfunc : PropTypes.func
    };

    constructor(props) {
        super(props);
		this.state = {
            registerToggle:false,
			redirect:false
        };
        this.searchEl = null;
		this.password = null;
        this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='bg-faded'>
                        <div className='container'>
                         <Container>
						 <Row>
						 <Col>
							<div className="icon">
							<img src={require('../image/LPICON.jpg')}/>
							</div>
						 </Col>
						
						 <Col>
						 
						 <div className="message">
							<Container>
							<Row>
							<Col>
								<Label>請輸入帳號</Label>
								<Input type="text" placeholder="Please Enter Your Account"/>
							</Col>
							</Row>
							<Row>
								<Col>
									<Label>請輸入密碼</Label>
									<Input type="password" placeholder="Please Enter Your Password"/>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button onClick={this.handleLogin}>登入</Button>
								</Col>
								<Col>
									<Button onClick ={this.handleRegister}>註冊帳號</Button>
								</Col>
							</Row>
							</Container>
						 </div>
						 </Col>
						 </Row>
						 </Container>
						 
                        </div>
                    </div>
       
                </div>
            </Router>
        );
    }
	handleLogin()
	{
		this.props.history.push('/main');
	}
	handleRegister()
	{
		this.props.history.push('/register');
	}
}

export default withRouter(Login)

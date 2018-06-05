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
	Label
} from 'reactstrap';
import {connect} from 'react-redux';
import Login from 'components/Login.jsx';
import './Register.css';
class Register extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
		const {loginfunc} = this.props;
        return (
            <Router>
                <div className='main'>
					<div className='content'>
							<Container>
							<Row>
								<Col>
									<Label>請輸入姓名</Label>
									<Input type="text" placeholder="Please Enter Your Name"/>
								</Col>
							</Row>
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
									<Label>請再次輸入密碼</Label>
									<Input type="password" placeholder="Please Enter Your Password Again"/>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button onClick={this.handleSubmit}>送出</Button>
								</Col>
								<Col>
									<Button onClick ={this.handleCancel}>取消</Button>
								</Col>
							</Row>
							</Container>
						 
						
                      </div>
                </div>
            </Router>
        );
    }
	handleSubmit()
	{
		this.props.history.push('/');
	}
	handleCancel()
	{
		this.props.history.push('/');
	}
}

export default withRouter(connect(state => ({

}))(Register))

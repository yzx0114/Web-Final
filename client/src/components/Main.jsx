import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { connect } from 'react-redux';

import { toggleNavbar } from 'states/main-actions.js';
import NewlendForm from './NewlendForm.jsx';
import BorrowForm from './BorrowForm.jsx';
import ArrearForm from './ArrearForm.jsx';
import FriendForm from './FriendForm.jsx';
import HistoryForm from './HistoryForm.jsx';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        navbarToggle: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.link = React.createRef();;
    }
    componentDidMount()
    {

    }
    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='bg-light'>
                        <div className='container'>
                            <Navbar color='faded' light expand="md">
                                <NavbarToggler onClick={this.handleNavbarToggle} />
                                <NavbarBrand className='text-info' href="/">Salmoney</NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/main/' ref ={this.link}>借款紀錄</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/main/ArrearForm'>欠款紀錄</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/main/HistoryForm'>歷史紀錄</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <div className='ml-auto'>
                                        <NavLink tag={Link} to='/main/NewlendForm'>新增借款</NavLink>
                                    </div>
                                    <div>
                                        <Button outline color="danger" onClick={this.handleLogOut}>登出</Button>
                                    </div>

                                </Collapse>
                            </Navbar>
                        </div>

                    </div>
                    <div className='friend-form' >
                        <FriendForm />
                    </div>
                    <Route exact path="/main" render={() => (
                        <BorrowForm />
                    )} />
                    <Route exact path="/main/ArrearForm" render={() => (
                        <ArrearForm />
                    )} />
                    <Route exact path="/main/HistoryForm" render={() => (
                        <HistoryForm />
                    )} />
                    <Route exact path="/main/NewlendForm" render={() => (
                        <NewlendForm />
                    )} />
                </div>

            </Router>
        );
    }

    handleNavbarToggle() {
        this.props.dispatch(toggleNavbar());
    }
    handleLogOut()
    {
      localStorage.removeItem('Account');
      this.props.history.push('/');
    }
}

export default withRouter(connect(state => ({
    ...state.main,
}))(Main));

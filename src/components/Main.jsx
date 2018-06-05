import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
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
import {connect} from 'react-redux';

import {toggleNavbar} from 'states/main-actions.js';
import {NewlendForm} from './NewlendForm.jsx';
import {BorrowForm} from './BorrowForm.jsx';
import {ArrearForm} from './ArrearForm.jsx';
import {HistoryForm} from './HistoryForm.jsx';
import './Main.css';

class Main extends React.Component {
    static propTypes = {
        navbarToggle: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        
    }
    
   
    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='bg-light'>
                        <div className='container'>
                            <Navbar color='faded' light expand="md">
                                <NavbarToggler onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className='text-info' href="/">Salmoney</NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>借款紀錄</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/ArrearForm'>欠款紀錄</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/HistoryForm'>歷史紀錄</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <div className='ml-auto'>
                                        <NavLink tag={Link} to='/NewlendForm'>新增借款</NavLink>
                                    </div>
                                </Collapse>
                            </Navbar>
                        </div>
                    </div>
                    <Route exact path="/" render={() => (
                        <BorrowForm recordType={'borrow'}/>
                    )}/>
                    <Route exact path="/ArrearForm" render={() => (
                        <ArrearForm recordType={'arrear'}/>
                     )}/>
                     <Route exact path="/HistoryForm" render={() => (
                        <ArrearForm recordType={'history'}/>
                     )}/>
                    <Route exact path="/NewlendForm" render={() => (
                        <NewlendForm />
                     )}/>
                </div>
                
            </Router>
        );
    }

    handleNavbarToggle() {
        this.props.dispatch(toggleNavbar());
    }

}

export default connect(state => ({
    ...state.main,
}))(Main);

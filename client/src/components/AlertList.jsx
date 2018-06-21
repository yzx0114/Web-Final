import React from 'react';
import {render} from 'react-dom'
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Card,
    CardTitle, 
    CardText, 
    Row, 
    Col,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';
import './AlertList.css';
import {toggleModal,toggleTabId,clickIKnow,RemindNextTime} from 'states/main-actions.js';
import classnames from 'classnames';
import AlertNav from './AlertNav.jsx';
import AlertItem from './AlertItem.jsx';

class AlertList extends React.Component {
    static propTypes = {
        navbarToggle: PropTypes.bool,
        dispatch: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.handleModalClick=this.handleModalClick.bind(this);
        this.handleNavClick=this.handleNavClick.bind(this);
     
    }
    render() {
        const{modalToggle,alerts,activeTab}=this.props;
        let navChildren;
        let tabChildren;
        let infoButton;
        let infoMessage=(
            <div>
                目前尚無討債紀錄喔
            </div>
        );
        if(alerts.length){
            console.log(alerts);
            navChildren =alerts.map(p=>(
                <NavItem key={p.id}>
                    <NavLink className={classnames({ active: activeTab === p.id})} onClick={() => { this.handleNavClick(p.id); }}>
                         <AlertNav name={p.name}/>
                    </NavLink>
                </NavItem>
            ));
            tabChildren =alerts.map(p=>(
                <AlertItem key={p.id} {...p}/>
            ));
            infoButton=(
                <div>
                    <Button color="success" onClick={()=>{this.handleButtonFirstClick(activeTab)}}>我知道了</Button>
                    <Button color="info" onClick={()=>{this.handleButtonSecondClick(activeTab)}}>下次再提醒我</Button>            
                </div>
            );
            infoMessage=(
                <div>
                    您收到{`${alerts.length}`}筆欠款未還通知
                </div>
            );
        }
        
        
        return (
            <div>
                <Button color="danger" onClick={this.handleModalClick}>check Alerts</Button>
                <Modal isOpen={modalToggle} toggle={this.handleModalClick} >
                    <ModalHeader toggle={this.handleModalClick}>{infoMessage}</ModalHeader>
                    <ModalBody>
                        <div>
                            <Nav tabs>
                                {navChildren}
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                {tabChildren}
                                {infoButton}
                            </TabContent>
                        </div>   
                    </ModalBody>
                </Modal>
            </div>
)}
    handleModalClick(){  
        this.props.dispatch(toggleModal());
        //console.log(this.props.modalToggle);
    }
    handleNavClick(tabId){
        this.props.dispatch(toggleTabId(tabId));
    }
    handleButtonFirstClick(tabId){
        this.props.dispatch(clickIKnow(tabId));
    }
    handleButtonSecondClick(tabId){
        this.props.dispatch(RemindNextTime(tabId));
        this.props.dispatch(toggleModal());
    }
}
export default connect(state => ({
    modalToggle:state.main.modalToggle,
    alerts:state.main.alerts,
    activeTab:state.main.activeTab
}))(AlertList);

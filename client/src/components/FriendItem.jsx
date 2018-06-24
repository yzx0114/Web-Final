import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showDetail } from 'states/friend-action.js';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';
import './FriendItem.css';

class FriendItem extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        account: PropTypes.string,
        amount: PropTypes.number
    };
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        const { name, amount } = this.props;
        return (

            <div className='record-item row container' onClick ={this.handleClick}>
                <div className='person-info col-sm-12 col-xl-12 row'>
                    <div className='picture col-sm-2 col-xl-2 align-self-center'>
                        <img className="rounded-circle" src="../../image/icon.png" width="50" height="50" />
                    </div>
                    <div className='name col-sm-6 col-xl-6 align-self-center'>
                        {name}
                    </div>
                    <div className='money col-sm-4 col-xl-4 align-self-center'>
                        ${amount}
                    </div>
                </div>
            </div>
        );
    }
    handleClick(){
        this.props.dispatch(showDetail(this.props.account));

    }
}

export default connect(state => ({
        click:state.friend.click
}))(FriendItem);

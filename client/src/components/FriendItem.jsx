import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showDetail } from 'states/friend-action.js';
import {
    Button
} from 'reactstrap';
import './RecordItem.css';

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
                <div className='person-info col-sm-9 col-xl-9 row'>
                    <div className='picture col-sm-2 col-xl-2 align-self-center'>
                        <img className="rounded-circle" src="../../image/icon.png" width="50" height="50" />
                    </div>
                    <div className='name col-sm-3 col-xl-3 align-self-center'>
                        {name}
                    </div>
                    <div className='money col-sm-3 col-xl-3 align-self-center'>
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

}))(FriendItem);

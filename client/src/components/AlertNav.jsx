import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom'
import {connect} from 'react-redux';
import classnames from 'classnames';
import {
    NavItem, 
    NavLink, 
} from 'reactstrap';

export default class AlertNav extends React.Component{
    static propTypes={
        id:PropTypes.string,
        dispatch:PropTypes.func
    }
    constructor(props){
        super(props);
    }
    render(){
        const {name}=this.props;
        return(
            <div>
                {name}
            </div>
        );
    }
}
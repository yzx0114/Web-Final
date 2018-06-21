import {
    login as loginFromApi
} from 'api/logins.js';
import React from 'react';
import{register as registerFromApi} from 'api/register.js';

function startLoading() {
    return {
        type: '@LOGIN/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@LOGIN/END_LOADING'
    };
}
export function AccountChange(value)
{
  return{
      type: '@LOGIN/ACCOUNT_CHANGE',
      value
  };
};
export function PasswordChange(value)
{
  return{
      type: '@LOGIN/PASSWORD_CHANGE',
      value
  };
};
export function Accept()
{
  return{
    type: '@LOGIN/ACCEPT'
  };
};
function Deny()
{
  return{
    type: '@LOGIN/DENY'
  };
};
export function login(account, password) {
    return (dispatch, getState) => {


		dispatch(startLoading());

        return loginFromApi(account, password).then(success => {
          if(success[0].count == 1)
          {
            localStorage.setItem('Account',account);
            dispatch(Accept());
          }
          else dispatch(Deny());
          dispatch(endLoading());
        }).catch(err => {
            console.error('Error login', err);
            dispatch(endLoading());
        });
    };
};

// Register
function startRegister() {
    return {
        type: '@LOGIN/START_REGISTER'
    };
}

function endRegister() {
    return {
        type: '@LOGIN/END_REGISTER'
    };
}
export function Clear()
{
  return {
    type : '@REGISTER/CLEAR'
  };
};
export function Change0(value)
{
  return{
      type: '@REGISTER/HANDLE_CHANGE0',
      value
  };
};
export function Change1(value)
{
  return{
      type: '@REGISTER/HANDLE_CHANGE1',
      value
  };
};
export function Change2(value)
{
  return{
      type: '@REGISTER/HANDLE_CHANGE2',
      value
  };
};
export function Change3(value)
{
  return{
      type: '@REGISTER/HANDLE_CHANGE3',
      value
  };
};
export function register(name ,account, password) {
    return (dispatch, getState) => {


		dispatch(startRegister());
      console.log('hello?');
        return registerFromApi(name,account, password).then(success => {
           
           dispatch(endRegister());
        }).catch(err => {
            console.error('Error login', err);
            dispatch(endRegister());
        });
    };
};

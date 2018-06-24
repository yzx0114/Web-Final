import {
    createNewlend as createNewlendFromApi,
} from 'api/newlendform.js';

export function inputAccount(account) {
    return {
        type: '@NEWLENDFORM/INPUT_ACCOUNT',
        account
    };
}

export function inputValue(value) {
    return {
        type: '@NEWLENDFORM/INPUT_VALUE',
        value
    };
}

export function inputDate(date) {
    return {
        type: '@NEWLENDFORM/INPUT_DATE',
        date
    };
}

export function inputDanger(danger) {
    return {
        type: '@NEWLENDFORM/INPUT_DANGER',
        danger
    };
}

function startLoading() {
    return {
        type: '@NEWLENDFORM/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@NEWLENDFORM/END_LOADING'
    };
}
export function Clear()
{
  return{
    type: `@NEWLENDFORM/CLEAR`
  };
}
export function submit(name, money, date) {
    return (dispatch, getState) => {
        dispatch(startLoading());

        return createNewlendFromApi(localStorage.getItem('Account'),name, money, date).then(() => {
        }).catch(err => {
            console.error('Error creating todos', err);
            dispatch(endLoading());
        });
    };
};

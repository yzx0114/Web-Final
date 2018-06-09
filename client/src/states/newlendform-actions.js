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

export function submit() {
    return {
        type: '@NEWLENDFORM/SUBMIT'
    };
}
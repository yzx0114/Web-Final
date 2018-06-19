const initNewLendFormState = {
    inputAccount: '',
    inputValue: '',
    inputDate:'',
    inputDanger: false  
};
export function newlendForm(state = initNewLendFormState, action) {
    switch (action.type) {
        case '@NEWLENDFORM/INPUT_ACCOUNT':
            return {
                ...state,
                inputAccount: action.account
            };
        case '@NEWLENDFORM/INPUT_VALUE':
            return {
                ...state,
                inputValue: action.value
            };    
        case '@NEWLENDFORM/INPUT_DATE':
            return {
                ...state,
                inputDate: action.date
            }; 
        case '@NEWLENDFORM/INPUT_DANGER':
            return {
                ...state,
                inputDanger: action.danger
            }; 
            
        default:
            return state;
    }
}

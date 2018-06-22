const initLoginState = {
    LoginLoading: false,
    LoginAccount: '',
    LoginPassword: '',
    Accept: false
};
export function login(state = initLoginState, action) {
    switch (action.type) {
        case '@LOGIN/START_LOADING':
            return {
                ...state,
                LoginLoading: true
            };
        case '@LOGIN/END_LOADING':
            return {
                ...state,
                LoginLoading: false
            };
        case '@LOGIN/ACCOUNT_CHANGE':
          return{
            ...state,
            LoginAccount: action.value
          };
        case '@LOGIN/PASSWORD_CHANGE':
          return{
            ...state,
            LoginPassword: action.value
          };
        case '@LOGIN/ACCEPT':
          return{
          ...state,
          Accept: true
        };
        case '@LOGIN/DENY':
        return{
        ...state,
        Accept: false
      };
        default:
            return state;
    }
}
const initRegisterState = {
    RegisterLoading: false,
    RegisterAccount: '',
    RegisterPassword: '',
    RegisterPasswordAgain: '',
    RegisterName: '',
    RegisterState: 0
};
export function register(state = initRegisterState, action)
{
  switch(action.type)
  {
      case `@REGISTER/START_REGISTER`:
        return{
          ...state,
          RegisterLoading: true
        };
      case `@REGISTER/END_REGISTER`:
        return{
            ...state,
            RegisterLoading: false
        };
      case '@REGISTER/HANDLE_CHANGE0':
       return{
         ...state,
         RegisterName : action.value
       };
      case '@REGISTER/HANDLE_CHANGE1':
        return{
          ...state,
          RegisterAccount : action.value
        };
      case '@REGISTER/HANDLE_CHANGE2':
         return{
           ...state,
           RegisterPassword : action.value
         };
       case '@REGISTER/HANDLE_CHANGE3':
          return{
            ...state,
            RegisterPasswordAgain : action.value
          };
      case `@REGISTER/SET_REGISTERSTATE`:
        return{
            ...state,
            RegisterState: action.value
        };
      case '@REGISTER/CLEAR':
        return{
          ...state,
          RegisterName: '',
          RegisterAccount: '',
          RegisterPassword: '',
          RegisterPasswordAgain: ''
        };
      default:
          return state;
  }
}

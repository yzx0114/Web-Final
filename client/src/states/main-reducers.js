const initMainState = {
    navbarToggle: false,
    modalToggle: false,
    alerts:[],
    activeTab:0,
    records:[]
};

export function main(state = initMainState, action) {  
    switch (action.type) {
        case '@MAIN/TOGGLE_NAVBAR':
            return {
                ...state,
                navbarToggle: !state.navbarToggle
            };
         case '@MAIN/TOGGLE_MODAL':   
            return {
                ...state,
                activeTab:(state.alerts.length > 0) ? state.alerts[0].record_id : 0,
                modalToggle: !state.modalToggle
            };
        case '@MAIN/TOGGLE_TABID':
            return {
                ...state,
                activeTab:(state.activeTab !== action.tabId) ? action.tabId : state.activeTab
            };
        case '@MAIN/END_LIST_ALERTS':
            return {
                ...state,
                alerts:action.alerts
            };
        case '@MAIN/END_CREATE_ALERT':
            var newAlerts = state.alerts.slice();
            newAlerts.unshift(action.alert);
            return {
                ...state,
                alerts:newAlerts
            };
        case '@MAIN/I_KNOW_BUTTON':
            return {
                ...state,
                activeTab:(action.alerts.length > 0) ? action.alerts[0].record_id : 0,
                modalToggle:(action.alerts.length > 0) ? true : false,
            };
        case '@MAIN/REMIND_NEXT_TIME':
            return {
                ...state
            };
        default:
            return state;
    }
}


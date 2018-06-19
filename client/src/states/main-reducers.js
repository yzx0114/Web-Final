const initMainState = {
    navbarToggle: false,
    modalToggle: false,
    alerts:[],
    activeTab:'',
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
                activeTab:(!state.modalToggle && state.alerts.length > 0) ? state.alerts[0].id : '',
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
                alerts:[...state.alerts,...action.alerts]
            };
        case '@MAIN/END_CREATE_ALERT':
            var newAlerts = state.alerts.slice();
            newAlerts.unshift(action.alert);
            return {
                ...state,
                alerts:newAlerts
            };
        case '@MAIN/I_KNOW_BUTTON':
            var deletedAlert=state.alerts.find(function(alert){
                return alert.id===action.tabId;
            });
            var index = state.alerts.indexOf(deletedAlert);
            if (index > -1) { 
                var newAlerts=state.alerts;
                newAlerts.splice(index,1);
            }
            var newActiveTab = (index===newAlerts.length) ? newAlerts[newAlerts.length-1] : newAlerts[index];
            
            return {
                ...state,
                activeTab:newActiveTab ? newActiveTab.id : ' ',
                modalToggle:newActiveTab ? true : false,
                alerts:newAlerts
            };
        case '@MAIN/REMIND_NEXT_TIME':
            return {
                ...state
            };
        default:
            return state;
    }
}


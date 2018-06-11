import{
    listAlerts as listAlertsFromApi,
    createAlert as createAlertsFromApi
}from 'api/Alerts.js'

export function toggleNavbar() {
    return {
        type: '@MAIN/TOGGLE_NAVBAR'
    };
}
export function toggleModal() {
    return {
        type: '@MAIN/TOGGLE_MODAL'
    };
}
export function toggleTabId(tabId){
    return {
        type: '@MAIN/TOGGLE_TABID',
        tabId
    };
}
export function clickIKnow(tabId){
    return {
        type: '@MAIN/I_KNOW_BUTTON',
        tabId
    };
}
export function RemindNextTime(tabId){
    return {
        type: '@MAIN/REMIND_NEXT_TIME',
        tabId
    };
}
function endlistAlert(alerts){
    return {
        type:'@MAIN/END_LIST_ALERT',
        alerts
    };
}
function endCreateAlert(alert){
    return {
        type:'@MAIN/END_CREATE_ALERT',
        alert
    };
}

export function listAlerts(){
    return (dispatch,getState)=>{
        return listAlertsFromApi().then(alerts=>{
            dispatch(endlistAlert(alerts));
        }).catch(err =>{
            console.error('error Alert',err);
        });
    };
}
export function createAlert(name,money,date){
    return (dispatch,getState)=>{
        return createAlertsFromApi(name,money,date).then(alert=>{
            
            dispatch(endCreateAlert(alert));
        }).catch(err =>{
            console.error("Error creating Alert",err);
        });
    };
};

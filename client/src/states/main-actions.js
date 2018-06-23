import{
    listAlerts as listAlertsFromApi,
    createAlert as createAlertsFromApi,
    cancelAlert as cancelAlertsFromApi
}from 'api/Alerts.js'
import {listBorrowRecords} from './borrow-actions.js'
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
function iknow(alerts){
    return {
        type: '@MAIN/I_KNOW_BUTTON',
        alerts
    };
}
export function clickIKnow(tabId){
    return (dispatch,getState)=>{
        return cancelAlertsFromApi(tabId).then(alerts=>{
                dispatch(iknow(alerts));
            }).catch(err=>{
                console.error('error cancel',err);
            }).then(()=>{
                dispatch(listBorrowRecords());
                dispatch(listAlerts());
            }).catch(err=>{
                console.error('error cancel',err);
            });
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
        type:'@MAIN/END_LIST_ALERTS',
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
export function createAlert(id){
    return (dispatch,getState)=>{
        return createAlertsFromApi(id).then(alert=>{
            dispatch(listAlerts());
            dispatch(listBorrowRecords());
            dispatch(endCreateAlert(alert));
        }).catch(err =>{
            console.error("Error creating Alert",err);
        });
    };
};

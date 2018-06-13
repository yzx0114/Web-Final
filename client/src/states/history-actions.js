import {
    listHistoryRecords as listHistoryRecordsFromApi
} from 'api/history.js'

function startLoading(){
    return {
        type:'@HISTORY/START_LOADING',
    };
};
function endListRecords(historyRecords){
    return{
        type:'@HISTORY/END_LIST_RECORDS',
        historyRecords
    };
};
function endLoading(){
    return{
        type:'@HISTORY/END_LOADING'
    };
};

export function listHistoryRecords() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listHistoryRecordsFromApi().then(historyRecords=>{
            dispatch(endListRecords(historyRecords));
        }).catch(err=> {
            console.error('Error listing historyRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};
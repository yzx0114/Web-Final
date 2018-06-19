import {
    listArrearRecords as listArrearRecordsFromApi
} from 'api/arrear.js'

function startLoading(){
    return {
        type:'@ARREAR/START_LOADING',
    };
};
function endListRecords(arrearRecords){
    return{
        type:'@ARREAR/END_LIST_RECORDS',
        arrearRecords
    };
};
function endLoading(){
    return{
        type:'@ARREAR/END_LOADING'
    };
};

export function listArrearRecords() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listArrearRecordsFromApi().then(arrearRecords=>{
            dispatch(endListRecords(arrearRecords));
        }).catch(err=> {
            console.error('Error listing arrearRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};
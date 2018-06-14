import {
    listBorrowRecords as listBorrowRecordsFromApi
} from 'api/borrow.js'

function startLoading(){
    return {
        type:'@BORROW/START_LOADING',
    };
};
function endListRecords(borrowRecords){
    return{
        type:'@BORROW/END_LIST_RECORDS',
        borrowRecords
    };
};
function endLoading(){
    return{
        type:'@BORROW/END_LOADING'
    };
};

export function listBorrowRecords() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listBorrowRecordsFromApi().then(borrowRecords=>{
            dispatch(endListRecords(borrowRecords));
        }).catch(err=> {
            console.error('Error listing borrowRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};
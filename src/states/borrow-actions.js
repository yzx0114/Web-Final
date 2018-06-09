import {
    listBorrowRecords as listBorrowRecordsFromApi
} from 'api/borrow.js'

function startLoading(){//個別定義action的type 看到時到reducer裡面要找誰做
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
            //  alert(borrowRecords[0]['name']);
            dispatch(endListRecords(borrowRecords));
        }).catch(err=> {
            console.error('Error listing borrowRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};
import {
    listBorrowRecords as listBorrowRecordsFromApi,
    complete as CompleteFromApi,
    deletes as deletesFromApi
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
export function deletes(id)
{
  return (dispatch, getState)=>{
      dispatch(startLoading());
      return deletesFromApi(id).then(()=>{

      }).catch(err=> {
          console.error('Error listing borrowRecords', err);
      }).then(()=> {
        dispatch(listBorrowRecords());
          dispatch(endLoading());
      });
  };
}
export function complete(id)
{
  return (dispatch, getState)=>{
      dispatch(startLoading());
      return CompleteFromApi(id).then(()=>{

      }).catch(err=> {
          console.error('Error listing borrowRecords', err);
      }).then(()=> {
          dispatch(listBorrowRecords());
          dispatch(endLoading());
      });
  };
}
export function listBorrowRecords() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listBorrowRecordsFromApi(localStorage.getItem('Account')).then(borrowRecords=>{
            dispatch(endListRecords(borrowRecords));
        }).catch(err=> {
            console.error('Error listing borrowRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};

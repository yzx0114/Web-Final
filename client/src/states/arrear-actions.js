import {
    listArrearRecords as listArrearRecordsFromApi,
    Confirm as ConfirmFromApi
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
export function Confirm(id){
  return (dispatch, getState)=>{
      dispatch(startLoading());
      return ConfirmFromApi(id).then(()=>{

      }).catch(err=> {
          console.error('Error listing arrearRecords', err);
      }).then(()=> {
          dispatch(endLoading());
      });
  };
};
export function listArrearRecords(user_account) {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listArrearRecordsFromApi(user_account).then(arrearRecords=>{
            dispatch(endListRecords(arrearRecords));
        }).catch(err=> {
            console.error('Error listing arrearRecords', err);
        }).then(()=> {
            dispatch(endLoading());
        });
    };
};

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
      console.log('in confirm');
      return ConfirmFromApi(id).then(()=>{

      }).catch(err=> {
          console.error('Error listing arrearRecords', err);
      }).then(()=> {
          dispatch(listArrearRecords(localStorage.getItem('Account')));
          dispatch(endLoading());
      });
  };
};
export function listArrearRecords(user_account) {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        console.log('in list record');
        let target_account = localStorage.getItem('friend_account');
        if(target_account === null) target_account = 'unknown';
        return listArrearRecordsFromApi(localStorage.getItem('Account'), target_account).then(arrearRecords=>{
            dispatch(endListRecords(arrearRecords));
        }).catch(err=> {
            console.error('Error listing arrearRecords', err);
        }).then(()=> {
          console.log('finish list');
            dispatch(endLoading());
        });
    };
};

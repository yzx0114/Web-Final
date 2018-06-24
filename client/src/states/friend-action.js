import {
    listFriend as listFriendFromApi,
} from 'api/friend.js'
import {listBorrowRecords} from './borrow-actions.js';
import {listArrearRecords} from './arrear-actions.js';
import {listHistoryRecords} from './history-actions.js';
function startLoading(){
    return {
        type:'@FRIEND/START_LOADING',
    };
};
function startLoading(){
    return {
        type:'@FRIEND/START_LOADING',
    };
};
function endListRecords(friendRecords){
    return{
        type:'@FRIEND/END_LIST_RECORDS',
        friendRecords
    };
};
function endLoading(){
    return{
        type:'@FRIEND/END_LOADING'
    };
};
export function showDetail(user_account){
    return (dispatch, getState)=>{
        localStorage.setItem('friend_account',user_account);
        switch(localStorage.getItem('mode')){
          case 'borrow':
            dispatch(listBorrowRecords());
          break;
          case 'arrear':
            dispatch(listArrearRecords());
          break;
          case 'history':
            dispatch(listHistoryRecords());
          break;
          default:
        }
    }


}
function combine(record)
{

  let arr=[];
  let count = 0;
  record.forEach(function(e){
      arr.forEach(function(e0){
          if(e.account == e0.account)
          {
               if(e.who == 'borrower')
               {
                 e0.amount -= e.amount;
               }
               else {
                  e0.amount += e.amount;
               }
          }
          else {
                arr.push(e);
          }
      });
      if(arr.length < 1) arr.push(e);
  });

  return arr;
}
export function listFriend() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listFriendFromApi(localStorage.getItem('Account')).then(friendRecords=>{
            dispatch(endListRecords(combine(friendRecords)));
        }).catch(err=> {
            console.error('Error listing arrearRecords', err);
        }).then(()=> {
          console.log('finish list');
            dispatch(endLoading());
        });
    };
};

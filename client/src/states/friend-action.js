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
        if(user_account == '') localStorage.removeItem('friend_account');
        else localStorage.setItem('friend_account',user_account);
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
        dispatch(listFriend(localStorage.getItem('Account')));
    }


}
function combine(record)
{
  let arr=[];
  let count = 0;
  let flag;
  for(let i = 0; i < record.length; i++)
  {
    flag = -1;
    for(let j = 0; j < arr.length; j++)
    {

        if(record[i].account === arr[j].account)
        {
          flag = j;
        }
    }
    //console.log(arr);
    if(flag != -1)
    {
      if(record[i].paid != true)
      {
          if(record[flag].who == 'borrower')
          {
            record[flag].amount -= record[i].amount;
          }
          else {
             record[flag].amount += record[i].amount;
          }
      }
    }
    else {
        console.log(record[i],flag);
        if(record[i].paid) record[i].amount = 0;
        if(record[i].who == 'borrower') record[i].amount *= -1;
        arr.push(record[i]);
    }
  }

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

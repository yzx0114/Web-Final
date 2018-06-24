import {
    listFriend as listFriendFromApi,
} from 'api/friend.js'
import {listBorrowRecords} from './borrow-action.jsx';
import {listArrearRecords} from './arrear-action.jsx';
import {listHistoryRecords} from './history-action.jsx';
function startLoading(){
    return {
        type:'@FRIEND/START_LOADING',
    };
};
export function showDetail(user_account){
        localStorge.setItem('friend_account',user_account);
        switch(localStorge.getItem('mode')){
          case 'borrow':
            listBorrowRecords();
          break;
          case 'arrear':
            listArrearRecords();
          break;
          case 'history':
            listHistoryRecords();
          break;
          default:
        }


}
export function listFriend() {
    return (dispatch, getState)=>{
        dispatch(startLoading());
        return listFriendFromApi(localStorge.getItem('Account')).then(arrearRecords=>{
            dispatch(endListRecords(arrearRecords));
        }).catch(err=> {
            console.error('Error listing arrearRecords', err);
        }).then(()=> {
          console.log('finish list');
            dispatch(endLoading());
        });
    };
};

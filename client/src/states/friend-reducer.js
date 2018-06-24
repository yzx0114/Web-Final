const initFriendState={
    recordLoading:false,
    click:false,
    friendRecords:[]
};


export function friend(state = initFriendState , action){
    switch(action.type){
        case '@FRIEND/START_LOADING':
            return {
                ...state,
                recordLoading:true
            };
        case '@FRIEND/END_LOADING':
            return{
                ...state,
                recordLoading:false
            };
        case '@FRIEND/END_LIST_RECORDS':
            return{
                ...state,
                friendRecords: action.friendRecords
            };
        default:
            return state;
    }
}

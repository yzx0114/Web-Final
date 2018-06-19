const initRecordState={
    recordLoading:false,
    borrowRecords:[]
};


export function borrow(state = initRecordState , action){
    switch(action.type){
        case '@BORROW/START_LOADING':
            return {
                ...state,
                recordLoading:true
            };
        case '@BORROW/END_LOADING':
            return{
                ...state,
                recordLoading:false
            };
        case '@BORROW/END_LIST_RECORDS':
            return{
                ...state,
                borrowRecords: action.borrowRecords
            };
        default:
            return state;
    }
}
const initRecordState={
    recordLoading:false,
    historyRecords:[]
};


export function history(state = initRecordState , action){
    switch(action.type){
        case '@HISTORY/START_LOADING':
            return {
                ...state,
                recordLoading:true
            };
        case '@HISTORY/END_LOADING':
            return{
                ...state,
                recordLoading:false
            };
        case '@HISTORY/END_LIST_RECORDS':
            return{
                ...state,
                historyRecords: action.historyRecords
            };
        default:
            return state;
    }
}
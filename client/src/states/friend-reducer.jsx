const initRecordState={
    recordLoading:false,
    arrearRecords:[]
};


export function arrear(state = initRecordState , action){
    switch(action.type){
        case '@ARREAR/START_LOADING':
            return {
                ...state,
                recordLoading:true
            };
        case '@ARREAR/END_LOADING':
            return{
                ...state,
                recordLoading:false
            };
        case '@ARREAR/END_LIST_RECORDS':
            return{
                ...state,
                arrearRecords: action.arrearRecords
            };
        default:
            return state;
    }
}

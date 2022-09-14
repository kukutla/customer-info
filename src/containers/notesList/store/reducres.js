import { DELETE__CUSTOMER_DATA,FETCHING__GET_LIST_DATA_FAILED, FETCHING__GET_LIST_DATA_SUCCESSFUL, FETCH__GET_LIST_DATA,UPDATE__CUSTOMER_DATA } from "./actionTypes"

const initstate ={
    notesList : [],
    isNotesFetching : false,
    isNotesFetchingFailed: false,
}

const GetListReducer = (state=initstate,action) => {
    switch (action.type){
        case FETCH__GET_LIST_DATA:
            return{
                ...state,
                isNotesFetching:true
            }
        case FETCHING__GET_LIST_DATA_SUCCESSFUL:
           // console.log(action.notesListData);
            return{
                ...state,
                notesList:action.notesListData,
                isNotesFetching:false
            }
        case FETCHING__GET_LIST_DATA_FAILED:
                return{
                    ...state,
                    isNotesFetchingFailed:true
                }
        default:
            return state
    }
}

export const editListReducer = (state=initstate,action) => {
    switch (action.type){
        case UPDATE__CUSTOMER_DATA:
            return{
                ...state
            }
        default:
            return state
    }
}

export const deleteListReducer = (state=initstate,action) => {
    switch (action.type){
        case DELETE__CUSTOMER_DATA:
            return{
                ...state
            }
        default:
            return state
    }
}

export  default GetListReducer
import { FETCHING__GET_LIST_DATA_FAILED, FETCHING__GET_LIST_DATA_SUCCESSFUL, FETCH__GET_LIST_DATA, INIT_GET_LIST_DATA,UPDATE__CUSTOMER_DATA,UPDATE__CUSTOMER_DATA_SUCCESSFUL,UPDATE__CUSTOMER_DATA_FAILED,DELETE__CUSTOMER_DATA,DELETE__CUSTOMER_DATA_SUCCESSFUL,DELETE__CUSTOMER_DATA_FAILED } from "./actionTypes"


export function initGetNotesData() {
    return{
        type:INIT_GET_LIST_DATA
    }
}

export function initfetchGetNotesData() {
    return{
        type:FETCH__GET_LIST_DATA
    }
}

export function initFetchGetNotesDataSuccessful(notesListData) {
    return{
        type:FETCHING__GET_LIST_DATA_SUCCESSFUL,
        notesListData
    }
}

export function initFetchGetNotesDataFailed(failed) {
    return{
        type:FETCHING__GET_LIST_DATA_FAILED,
        failed:failed
    }
}

export function editCustomerData(customer) {
    return{
        type:UPDATE__CUSTOMER_DATA,customer
    }
}

export function editCustomerDataSuccessful() {
    return{
        type:UPDATE__CUSTOMER_DATA_SUCCESSFUL,"success":"success"
    }
}

export function editCustomerDataFailed() {
    return{
        type:UPDATE__CUSTOMER_DATA_FAILED,"failed":"failed"
    }
}

export function deleteCustomerData(id) {
    return{
        type:DELETE__CUSTOMER_DATA,id
    }
}

export function deleteCustomerDataSuccessful() {
    return{
        type:DELETE__CUSTOMER_DATA_SUCCESSFUL,
        "success":"success"
    }
}

export function deleteCustomerDataFailed() {
    return{
        type:DELETE__CUSTOMER_DATA_FAILED,"failed":"failed"
    }
}
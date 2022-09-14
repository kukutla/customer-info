import { INIT_GET_LIST_DATA, UPDATE__CUSTOMER_DATA, DELETE__CUSTOMER_DATA } from "./actionTypes"
import { call, put, takeEvery } from "redux-saga/effects"
import axios from "axios";
import { initFetchGetNotesDataSuccessful, initfetchGetNotesData } from "./action";

export function* GetListSaga() {
    yield takeEvery(INIT_GET_LIST_DATA, getListData)
}

export function* editListSaga() {
    yield takeEvery(UPDATE__CUSTOMER_DATA, editCustomer)
}

export function* deleteListSaga() {
    yield takeEvery(DELETE__CUSTOMER_DATA, deleteCustomer)
}

const header = {
        'Access-Control-Allow-Origin': "http://localhost:8080"
}

function* getListData(action) {
console.log("getListData");
    yield put(initfetchGetNotesData())
    try {

        const response = yield call(axios.get, "http://localhost:8080/demo/all", { headers: header })
        if (response != null && response.status === 200) {
            const { data } = response;
            let notesData = []
            for (const key in data) {
                notesData.push(data[key])
            }
            //console.log(notesData);

            yield put(initFetchGetNotesDataSuccessful(notesData));
        }

    } catch (err) {
        console.log("gateher some error");
    }
}

function* editCustomer(action) {
    console.log("editCustomer", action.customer);
    try {

        const response = yield call(axios.put, "http://localhost:8080/demo/update", action.customer)
        if (response != null && response.status === 200) {
            const { data } = response;
            console.log("data", data);


            yield getListData(action)
        }

    } catch (err) {
        console.log("gateher some error");
    }
}

function* deleteCustomer(action) {
    try {

        const response = yield call(axios.delete,`http://localhost:8080/demo/${action.id}`)
        if (response != null && response.status === 200) {
            const { data } = response;
            console.log("data", data);


            yield getListData(action)
        }

    } catch (err) {
        console.log("gateher some error");
    }
}

export default GetListSaga 
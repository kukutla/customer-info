
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { initSaveNotesValueFailed, initSaveNotesValueSuccessful } from "./actions";
//root saga will combine all sub saga
//watcher saga
//put - put value into your action and then this will dispatch the value to action -> reducer
//call - calling api
//takevery,takelatest

import { INIT_SAVE_NOTES_VALUE } from "./actionTypes";


export function* AddNotesSaga() {
    yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga)
}

function* saveNotesSaga(action) {

    const header = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': "http://localhost:8080"
    }

    const createNotesParms = {
        name: action.noteValue,
        email: action.email
    }

    //console.log(createNotesParms)

    try {
        console.log("requser=>",createNotesParms);
        const response = yield call(axios.post, 'http://localhost:8080/demo/add', createNotesParms, { headers: header })
        console.log(response);
        if (response.status === 200)
            yield put(initSaveNotesValueSuccessful(true))
    } catch (error) {
        //some error
        yield put(initSaveNotesValueFailed(true))
    }
}

export default AddNotesSaga
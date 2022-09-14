// all , fork
import {all,fork} from 'redux-saga/effects'
import  AddNotesSaga  from '../containers/addNotes/store/sagas'
import GetListSaga from '../containers/notesList/store/sagas'
import {editListSaga,deleteListSaga} from '../containers/notesList/store/sagas'

export  default function* rootSaga(){
    yield all ([fork(AddNotesSaga), fork(GetListSaga), fork(editListSaga),fork(deleteListSaga)])
}
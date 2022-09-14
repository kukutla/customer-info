import {combineReducers} from 'redux'
import AddNotesReducer from '../containers/addNotes/store/reducers'
import GetListReducer from '../containers/notesList/store/reducres';
import {editListReducer} from '../containers/notesList/store/reducres';
const rootReduce = combineReducers({
    AddNotesReducer,GetListReducer,editListReducer
})

export default rootReduce;
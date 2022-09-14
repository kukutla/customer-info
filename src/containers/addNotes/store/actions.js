
import { INIT_SAVE_NOTES_VALUE, SAVE_NOTES_VALUE_FAILED, SAVE_NOTES_VALUE_SUCCESSFULL} from './actionTypes.js'
//action - is simply a java script function
// type: mandatory, to identify particular action
// additinal parameter that you can pass to the particular action

export function initSaveNotesValue(noteValue,email){
    return{
        type: INIT_SAVE_NOTES_VALUE,noteValue,email
    }
}

export function initSaveNotesValueSuccessful(success){
    return{
        type: SAVE_NOTES_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveNotesValueFailed(failed){
    return{
        type: SAVE_NOTES_VALUE_FAILED,
        failed
    }
}
import { SAVE_NOTES_VALUE_FAILED, SAVE_NOTES_VALUE_SUCCESSFULL } from "./actionTypes";
const initialstate = {
    success: false,
    failed: false
}
const AddNotesReducer = (state=initialstate,action) => {
        switch (action.type) {
            case SAVE_NOTES_VALUE_SUCCESSFULL:
                console.log(action);
                return{
                    ...state,
                    success:action.success,
                };
                
            case SAVE_NOTES_VALUE_FAILED:
                return{
                    ...state,
                    failed:action.failed,
                }
            default:
                return state;
        }
}

export default AddNotesReducer;
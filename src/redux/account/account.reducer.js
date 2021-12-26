import AccountActionTypes from "./account.types"

const INITIAL_STATE = {
    hidden: true
}

const accountReducer =(state = INITIAL_STATE, action) => {
    switch(action.type){
        case AccountActionTypes.TOGGLE_ACCOUNT_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            default:
                return state
    }
}

export default accountReducer
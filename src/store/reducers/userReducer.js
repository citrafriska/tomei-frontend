import {USER_SIGNUP} from "./../actions/types"

const initialState = {
    step: 0,
    accounts : []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_SIGNUP:
            return (
                state = {
                    ...state,
                    step : 1,
                    accounts : [...state.accounts, action.payload]
                }
            )
        default:
            return state
    }
}

export default userReducer;
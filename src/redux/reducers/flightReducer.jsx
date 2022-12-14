import { flightActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    errorMessage: '',
    FLIGHT: [],

}

export const FlightReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: payload,
            }

        case flightActionTypes.GET_FLIGHT:
            return {
                ...state,
                FLIGHT: payload,
                isloading: false
            }

            case messageActionType.ERROR_MESSAGE:
                return {
                    ...state,
                    errorMessage: payload,
                }


        default:
            return state;
    }
}
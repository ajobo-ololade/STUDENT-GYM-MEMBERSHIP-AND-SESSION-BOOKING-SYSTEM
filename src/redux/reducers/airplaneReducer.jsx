import { airplaneActionTypes, isLoadingType, messageActionType } from "../types"

const initialState = {
    successMessage: '',
    isLoading: false,
    AIRPLANE: [],

}

export const AirplaneReducers = (state = initialState, { type, payload }) => {
    // console.log(payload);
    switch (type) {

        case isLoadingType.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case airplaneActionTypes.GET_AIRPLANE:
            return {
                ...state,
                AIRPLANE: payload,
                isloading: false
            }

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                succcessMessage: "Airplane add successfully",
            }

        default:
            return state;
    }
}
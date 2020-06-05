import axios from "axios";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../store";
import {setCookie} from "../setToken";

const IS_SENDING = 'IS_SENDING';
const SEND_ERROR = 'SEND_ERROR';
const SEND_OK = 'SEND_OK';

const initialState = {
    isSendingSwitch: false,
    isErrorShow: false,
    isSendOkShow: false,
};

const registerReducer = (state = initialState, action:RegisterActionType) => {
    switch (action.type) {
        case IS_SENDING:
            return {...state, isSendingSwitch: action.isSending};
        case SEND_ERROR:
            return {...state, isErrorShow: action.isSendError};
        case SEND_OK:
            return {...state, isSendOkShow: action.isSendOk};
        default:
            return {state};
    }
};

//Action creators

type IsSendingACType = {
    type: typeof IS_SENDING
    isSending: boolean
}
type IsErrorACType = {
    type: typeof SEND_ERROR
    isSendError: boolean
}
type IsSendOkACType = {
    type: typeof SEND_OK
    isSendOk: boolean
}

type RegisterActionType = IsSendingACType | IsErrorACType | IsSendOkACType

export const isSendingAC = (isSending: boolean):IsSendingACType => ({type: IS_SENDING, isSending});
export const  isErrorAC = (isSendError: boolean):IsErrorACType => ({type: SEND_ERROR, isSendError});
export const  isSendOkAC = (isSendOk: boolean):IsSendOkACType => ({type: SEND_OK, isSendOk});

//API

type ResponseType = {
    addedUser: {
        email: string
        isAdmin: boolean
        __v: number
        _id: string
    },
    success: boolean
}

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/auth",
});

const api = {
    sendRegisterData(email: string, password: string) {
        return instance.post<ResponseType>(`/register`, {email, password})
    }
};

//Thunk creator

type ThunkType = ThunkAction<void, AppStateType, unknown, RegisterActionType>

export const sendRegisterThunk = (email: string, password: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, RegisterActionType>,
           getState: () => AppStateType) => {
        dispatch(isSendingAC(true));
        dispatch(isErrorAC(false));
        dispatch(isSendOkAC(false));
        try {
            const response = await api.sendRegisterData(email, password);
            dispatch(isSendOkAC(true));
            dispatch(isSendingAC(false));
            console.log(response)

        } catch (e) {
            dispatch(isErrorAC(true));
            dispatch(isSendingAC(false))
        }
    };



export default registerReducer;
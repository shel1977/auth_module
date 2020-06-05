import axios from "axios";
import {AppStateType} from "../store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {setCookie} from "../setToken";

const IS_SENDING = 'IS_SENDING';
const SEND_ERROR = 'SEND_ERROR';
const SEND_OK = 'SEND_OK';

const initialState = {
    isSendingSwitch: false,
    isErrorShow: false,
    isSendOkShow: false,
};

const loginReducer = (state  = initialState, action: LoginActionType) => {
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

type LoginActionType = IsSendingACType | IsErrorACType | IsSendOkACType

export const isSendingAC = (isSending: boolean): IsSendingACType => ({type: IS_SENDING, isSending});
export const isErrorAC = (isSendError: boolean): IsErrorACType => ({type: SEND_ERROR, isSendError});
export const isSendOkAC = (isSendOk: boolean): IsSendOkACType => ({type: SEND_OK, isSendOk});

//API

type ResponseType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    __v: number
    _id: string
    success: boolean
    error?: string
}

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0",
});


const api = {
    sendLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>(`/auth/login`, {email, password, rememberMe})
    }
};

//Thunk creator

type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionType>

export const signInThunk = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, LoginActionType>,
           getState: () => AppStateType) => {
            dispatch(isSendingAC(true));
            dispatch(isErrorAC(false));
            dispatch(isSendOkAC(false));
        try {
            const response = await api.sendLogin(email, password, rememberMe);
            setCookie('token', response.data.token,
                Math.floor(response.data.tokenDeathTime / 100) - 180);
            dispatch(isSendOkAC(true));
            dispatch(isSendingAC(false));
        } catch (e) {
            dispatch(isErrorAC(true));
            dispatch(isSendingAC(false))
        }
    };


export default loginReducer;
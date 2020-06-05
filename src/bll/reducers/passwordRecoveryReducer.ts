import axios from "axios";
import {Dispatch} from "redux";
import {AppStateType} from "../store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const IS_SENDING = 'IS_SENDING';
const SEND_ERROR = 'SEND_ERROR';
const SEND_OK = 'SEND_OK';
const USER_LOGGED_IN = 'USER_LOGGED_IN';


type StateType = {
    isSendingSwitch: boolean
    isErrorShow: boolean
    isSendOkShow: boolean
    userLogged: boolean
}

const initialState: StateType = {
    isSendingSwitch: false,
    isErrorShow: false,
    isSendOkShow: false,
    userLogged: false
};

type InitialStateType = typeof initialState;

const passwordRecoveryReducer = (state: InitialStateType = initialState, action: PasswordRecoveryActionType) => {
    switch (action.type) {
        case IS_SENDING:
            return {...state, isSendingSwitch: action.isSending};
        case SEND_ERROR:
            return {...state, isErrorShow: action.isSendError};
        case SEND_OK:
            return {...state, isSendOkShow: action.isSendOk};
        case USER_LOGGED_IN:
            return {...state, userLogged: action.userLogged};
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

type IsUserLoggedIACType = {
    type: typeof USER_LOGGED_IN
    userLogged: boolean
}

type PasswordRecoveryActionType = IsSendingACType | IsErrorACType | IsSendOkACType | IsUserLoggedIACType

export const isSendingAC = (isSending: boolean): IsSendingACType => ({type: IS_SENDING, isSending});
export const isErrorAC = (isSendError: boolean): IsErrorACType => ({type: SEND_ERROR, isSendError});
export const isSendOkAC = (isSendOk: boolean): IsSendOkACType => ({type: SEND_OK, isSendOk});
export const userLoggedInAC = (userLogged: boolean): IsUserLoggedIACType => ({type: USER_LOGGED_IN, userLogged});

//API

type ResponseType = {
    success: boolean
    error?: string
}

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0",
});


const api = {
    recoveryPassword(email: string, html1: string, html2: string ) {
        return instance.post<ResponseType>(`/auth/forgot`, {email, html1, html2})
    }
};

//Thunk creator
/*
export const setCookie = (name: string, value: string, age: number) => {
    document.cookie = `${name}=${value};max-age=${age};path=/`;
};
*/


type ThunkType = ThunkAction<void, AppStateType, unknown, PasswordRecoveryActionType>

export const recoveryThunk = (email: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, PasswordRecoveryActionType>,
           getState: () => AppStateType) => {
    debugger
        dispatch(isSendingAC(true));
        dispatch(isErrorAC(false));
        dispatch(isSendOkAC(false));
        try {
            const html1 = "<a href='http://localhost:3000/#/reset-password/";
            const html2 = ">reset-password-link</a>";
            await api.recoveryPassword(email, html1, html2);
            dispatch(isSendOkAC(true));
            dispatch(isSendingAC(false));

        } catch (e) {
            dispatch(isErrorAC(true));
            dispatch(isSendingAC(false))
        }
    };


export default passwordRecoveryReducer;
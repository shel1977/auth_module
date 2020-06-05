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

const profileReducer = (state: InitialStateType = initialState, action: LoginActionType) => {
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

type LoginActionType = IsSendingACType | IsErrorACType | IsSendOkACType | IsUserLoggedIACType

export const isSendingAC = (isSending: boolean): IsSendingACType => ({type: IS_SENDING, isSending});
export const isErrorAC = (isSendError: boolean): IsErrorACType => ({type: SEND_ERROR, isSendError});
export const isSendOkAC = (isSendOk: boolean): IsSendOkACType => ({type: SEND_OK, isSendOk});
export const userLoggedInAC = (userLogged: boolean): IsUserLoggedIACType => ({type: USER_LOGGED_IN, userLogged});

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
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/auth",
});


const api = {
    sendLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>(`/login`, {email, password, rememberMe})
    }
}

//Thunk creator
export const setCookie = (name: string, value: string, age: number) => {
    document.cookie = `${name}=${value};max-age=${age};path=/`;
};


type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionType>

export const signInThunk = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, LoginActionType>,
           getState: () => AppStateType) => {
            dispatch(isSendingAC(true))
            dispatch(isErrorAC(false))
            dispatch(isSendOkAC(false))
        try {
            const response = await api.sendLogin(email, password, rememberMe)
            dispatch(isSendOkAC(true))
            dispatch(isSendingAC(false))
            setCookie('token', response.data.token,
                Math.floor(response.data.tokenDeathTime / 100) - 180);
            dispatch(userLoggedInAC(true))
        } catch (e) {
            dispatch(isErrorAC(true))
            dispatch(isSendingAC(false))
        }
    }


export default profileReducer;
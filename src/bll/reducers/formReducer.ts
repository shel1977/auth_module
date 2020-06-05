const IS_SENDING = 'IS_SENDING';
const SEND_ERROR = 'SEND_ERROR';
const SEND_OK = 'SEND_OK';

const initialState = {
    isSendingSwitch: false,
    isErrorShow: false,
    isSendOkShow: false,
};

const formReducer = (state  = initialState, action: FormActionType) => {
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

export type FormActionType = IsSendingACType | IsErrorACType | IsSendOkACType

export const isSendingAC = (isSending: boolean): IsSendingACType => ({type: IS_SENDING, isSending});
export const isErrorAC = (isSendError: boolean): IsErrorACType => ({type: SEND_ERROR, isSendError});
export const isSendOkAC = (isSendOk: boolean): IsSendOkACType => ({type: SEND_OK, isSendOk});

export default formReducer;
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import loginPageReducer from "./redusers/loginPageReducer";
import newPasswordPageReducer from "./redusers/newPasswordPageReducer";
import recoverPassPageReducer from "./redusers/recoverPassPageReducer";
import profileReducer from "./redusers/profileReducer";
import registerReducer from "./redusers/registerReducer";



const rootReducer = combineReducers({
    login: loginPageReducer,
    newPassword: newPasswordPageReducer,
    passwordRecover: recoverPassPageReducer,
    profile: profileReducer,
    register: registerReducer
});


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
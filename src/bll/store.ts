import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import loginReducer from "./reducers/loginReducer";
import allFormReducer from "./reducers/formReducer";
import newPasswordReducer from "./reducers/newPasswordReducer";
import passwordRecoveryReducer from "./reducers/passwordRecoveryReducer";
import profileReducer from "./reducers/profileReducer";
import registerReducer from "./reducers/registerReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    passwordRecovery: passwordRecoveryReducer,
    allForm: allFormReducer,
  newPassword: newPasswordReducer,
        profile: profileReducer,
    register: registerReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
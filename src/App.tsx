import React from 'react';
import './App.css';
import ProjLink from "./components/NavLink/NavLink";
import {Switch, Route, HashRouter, Redirect} from 'react-router-dom';
import LoginContainer from "./containers/Login/LoginContainer";
import Profile from "./containers/Profile/Profile";
import RegisterContainer from "./containers/Register/RegisterContainer";
import {Provider} from 'react-redux';
import store from './bll/store';
import ProfileContainer from "./containers/Profile/ProfileContainer";
import PasswordRecoveryContainer from "./containers/PasswordRecovery/PasswordRecoveryContainer";
import NewPasswordContainer from "./containers/NewPassword/NewPasswordContainer";


const App: React.FC = () => {

    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App">
                    <div className="navigation">
                        <ProjLink to={'/login'} name={'Login'}/>
                        <ProjLink to={'/newpassword'} name={'New Password'}/>
                        <ProjLink to={'/passwordrecovery'} name={'Recovery Password'}/>
                        <ProjLink to={'/profile'} name={'Profile'}/>
                        <ProjLink to={'/register'} name={'Register'}/>
                    </div>
                    <div className="main">
                        <Switch>
                            <Route path='/login'>
                                <LoginContainer/>
                            </Route>
                            <Route path='/newpassword'>
                                <NewPasswordContainer/>
                            </Route>
                            <Route path='/passwordrecovery'>
                                <PasswordRecoveryContainer/>
                            </Route>
                            <Route path='/profile'>
                                <ProfileContainer/>
                            </Route>
                            <Route path='/register'>
                                <RegisterContainer/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Provider>
        </HashRouter>
    );
};


export default App;



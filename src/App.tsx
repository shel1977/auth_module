import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import LinkComponent from "./components/NavLink/NavLink";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import RecoverPassPage from "./components/RecoverPassPage/RecoverPassPage";
import NewPassPage from "./components/NewPassPage/NewPassPage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <LinkComponent to={'/login'} title={'Login'}/>
                    <LinkComponent to={'/profile'} title={'Profile'}/>
                    <LinkComponent to={'/register'} title={'Registration'}/>
                    <LinkComponent to={'/newpass'} title={'New password'}/>
                    <LinkComponent to={'/recoverpass'} title={'Recover password'}/>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route path='/login'>
                        <LoginPage/>
                    </Route>
                    <Route path='/profile'>
                        <ProfilePage/>
                    </Route>
                    <Route path='/register'>
                        <RegisterPage/>
                    </Route>
                    <Route path='/register'>
                        <RegisterPage/>
                    </Route>
                    <Route path='/newpass'>
                        <NewPassPage/>
                    </Route>
                    <Route path='/recoverpass'>
                        <RecoverPassPage/>
                    </Route>
                </Switch>

                <div className='example'>
                    <div>
                        <h2>examples</h2>
                    </div>
                    <div>
                        <Button title={'simple button'}/>
                    </div>
                    <div>
                        <Input placeholder={'write here'}/>
                    </div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;

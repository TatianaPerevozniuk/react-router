import {Switch} from 'react-router-dom';
import {Navigation} from "./components/Navigation";
import {appRoutes} from "./routes/index";

import './App.css';
import React, {useCallback, useReducer} from 'react';
import {UserForm} from "./components/UserForm";
import {Route} from './components/Route';

export const Store = React.createContext({
    state: {},
    actions: {}
});


const initialState = {
    user: null,
    isAuthenticated: false
};

// const action = {
//     type: "LOGIN-USER",
//     payload: {name: 'Tania', surname: 'Perevozniuk'}
// }

// const action = {
//     type: "LOGOUT-USER",
//     payload: null
// }
const reduser = (state, {type, payload}) => {
    switch (type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: payload,
                isAuthenticated: true
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
};
//создадим кастомны хук useStore
//хук useReducer - строит базовый редьюсер - структура данных, которая разделяется на функцию,
// которая изменяет состояние и на само состояние. Состояние в данном случае может быть любым типом данных,
// от примитивных до ссылочных объектов
const useStore = () => {
    const [state, dispatch] = useReducer(reduser, initialState);

    const loginUser = useCallback((user) => {
        dispatch({type: "LOGIN_USER", payload: user});
    }, []);

    const logoutUser = useCallback(() => {
        dispatch({type: "LOGOUT_USER"});
    }, []);

    return {
        state,
        actions: {loginUser, logoutUser}
    };
};

const links = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/about',
        label: 'About'
    },
    {
        to: '/catalog',
        label: 'Products'
    },
    {
        to: '/contacts',
        label: 'Contacts'
    },
    {
        to: '/account',
        label: 'Account'
    }
];

function App() {
    const store = useStore();
    return (
        <Store.Provider value={store}>
            <div className="App">
                <header className='header'>
                    <Navigation links = {links}/>
                    <UserForm />
                </header>
                <main className='content'>
                    <Switch>
                        {/*<Route path='/' exact component={HomePage}>*/}
                        {/*    /!*<HomePage/>*!/*/}
                        {/*</Route>*/}
                        {/*<Route path='/about' exact render={() => <AboutPage/>}>*/}
                        {/*    /!*<AboutPage/>*!/*/}
                        {/*</Route>*/}
                        {/*<Route path='/contacts' exact>*/}
                        {/*    <ContactsPage/>*/}
                        {/*</Route>*/}

                        {appRoutes.map(route => (
                                // <Route path = {route.path} exact={route.exact} component={route.component}/>
                                <Route key={route.path} {...route}/>
                            )
                        )}
                        <Route path='*'>
                            <p>404: No Page Found</p>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Store.Provider>

    );
}

export default App;

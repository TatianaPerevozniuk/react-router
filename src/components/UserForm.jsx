import {useContext} from "react";
import {Store} from '../App';
import {LoginForm} from "./LoginForm";
import {useHistory} from "react-router";

export const UserForm = () => {
    const {
        state: {
            isAuthenticated,
            user
        },
        actions: {
            logoutUser
        }
    } = useContext(Store);

    const history = useHistory();
    const handleClick = () => {
        try {
            logoutUser();
            history.push('/');
        } catch (error) {
            alert('Smt goes wrong. you can not be ' +
                'logged out. Try again.')
        }

    }

    if (isAuthenticated) {
        return (
            <div className="user">
                <p>{user.name}</p>
                <p>{user.surname}</p>
                <button onClick={handleClick}>LogOut</button>
            </div>

        );
    }
    return <LoginForm />

        ;
};
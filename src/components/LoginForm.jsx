import {useContext} from "react";
import {useHistory} from "react-router";
import {Store} from '../App';

export const LoginForm = () => {
    const {actions: {
        loginUser
    }} = useContext(Store);

    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {};

        for (const {type, name, value} of event.target) {
            if (type === 'text') {
                user[name] = value
            }
        }

        try {
            loginUser(user);
            history.push('/account');
        } catch (error) {
            alert('Error, you can not login, Try again.')
        }
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="login_field">
                <label htmlFor="user-name">Name</label>
                <input id="user-name" name="name" type="text"/>
            </div>
            <div className="login_field">
                <label htmlFor="user-surname">Surname</label>
                <input id="user-surname" name="surname" type="text"/>
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}
import React, { useState, useEffect } from 'react';
import { configs } from '../config';
import loginUser from "../store/actions/loginUser";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username: "",
    password: "",
};


export default function LoginForm(props) {
    const { values, update, submit } = props;
    const [users, setUsers] = useState([]);
    const [formValues, setformValues] = useState(initialFormValues);
    const dispatch = useDispatch();
    const { push } = useHistory(); 

        const onChange = evt => {
        const { name, value } = evt.target;
        setformValues({
            ...formValues,
            [name]: value
        });
    };
    const onSubmit = evt => {
        evt.preventDefault();
        const user = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        };
        dispatch(loginUser(user));
        push('/dashboard')
    };

    return (
        
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={onChange}
                        value={formValues.username}
                        placeholder="Enter your username"
                        maxLength="30"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={formValues.password}
                        placeholder="Enter your password"
                        maxLength="30"
                    />
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}
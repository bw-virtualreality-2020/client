import React, { useState, useEffect } from "react";

const initialFormValues = {
    username: "",
    userpassword: "",
    email: "",
    role: ""
};

export default function Register(props) {
    const { values, update, submit } = props;
    const [users, setUsers] = useState([]);
    const [formValues, setformValues] = useState(initialFormValues);

    const onChange = evt => {
        const { name, value } = evt.target;
        setformValues({
            ...formValues,
            [name]: value
        });
    };
    const onSubmit = evt => {
        evt.preventDefault();
        const newUser = {
            username: formValues.username.trim(),
            userpassword: formValues.userpassword.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        };
        console.log(newUser);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>
                    User Name
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
                    Password
                    <input
                        type="password"
                        name="userpassword"
                        onChange={onChange}
                        value={formValues.userpassword}
                        placeholder="Enter your password"
                        maxLength="30"
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={formValues.emsil}
                        placeholder="Enter your email"
                        maxLength="30"
                    />
                </label>

                <label>
                    <select name="role" value={formValues.role} onChange={onChange}>
                        <option value="">Select One</option>
                        <option value="Funder">Funder</option>
                        <option value="Fundraiser">Fundraiser</option>
                    </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}


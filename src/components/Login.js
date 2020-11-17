import React, { useState, useEffect } from 'react';
import { configs } from '../config';




    const initialFormValues = {
            username: "",
            userpassword: "",
          };
      
          
          export default function LoginForm(props) {
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
                    Username:
                    <input
                      type="text"
                      name="username"
                      onChange={onChange}
                      value={formValues.username}
                      placeholder="Enter your username"
                      maxlength="30"
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="userpassword"
                      onChange={onChange}
                      value={formValues.userpassword}
                      placeholder="Enter your password"
                      maxlength="30"
                    />
                  </label>
                  <div className="submit">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            );
          }
        
    



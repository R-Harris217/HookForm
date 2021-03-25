/*I tried using the information from conditional rendering to complete this.
After viewing the solution I can see now that the extra functions were not
necessary and putting the ternary operator directly after the div on the form
requires a lot less and also updates to make the error go away once the names
and passwords meet the right conditions. I decided to leave this as is since it
is what I originally wrote.*/

import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <2){
            setFirstNameError("First Name must be at least 2 characters.");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length <2){
            setLastNameError("Last Name must be at least 2 characters.");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <5){
            setEmailError("Email must be at least 5 characters.");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <8){
            setPasswordError("Password must be at least 8 characters.");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(confirmPassword !== password){
            setConfirmPasswordError("Passwords must match.");
        }
    }


    const createUser = (e) =>{
        e.preventDefault ();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
    }
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name</label>
                <input type="text" 
                name="firstName" 
                // onChange={ (e) => setFirstName(e.target.value) }/>
                onChange={ handleFirstName }/>
                
            </div>
            {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                } 
            <div>
                <label>Last Name</label>
                <input type="text" 
                name="lastName" 
                onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" 
                name="email" 
                onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password</label>
                <input type="text" 
                name="setPassword" 
                onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="text" 
                name="confirmPassword" 
                onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            {/* <input type="submit" value="Create User" /> */}
        </form>
    )
}
export default Form;
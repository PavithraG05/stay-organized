import { useEffect, useState } from 'react';
import styles from './registeruser.module.css'

const userForm = {
    FullName:"",
    Username:"",
    Password:"",
    ConfirmPassword:"",
}


const RegisterUserForm = () => {

    const [form,setForm] = useState(userForm);
    const [fullNameErr, setFullNameErr ] = useState("");
    const [userNameErr, setUserNameErr ] = useState("");
    const [passwordErr, setPasswordErr ] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr ] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [isUsernameExist,setIsUsernameExist] = useState(false);

    // useEffect(()=>{handleConfirmPassword();
    //     console.log("password changed")
    // },[form.Password]);

    const userData = {
        name: "",
        username: "",
        password: "",
    }
    
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setForm((form) => ({
            ...form,
            [name]: value,
        })
      );
    }

    function sendUserData(){
        
        fetch('http://localhost:8083/api/users',
            {
                method: "POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(userData)
            }
        )
        .then((response) => response.json())
        .then((data) => {
            alert("user added successfully");
        })
        .catch((error) => {
            console.log(error)
        });
    }

    function showHidePassword(){
        setShowPassword(!showPassword);
    }

    function handleSubmit(event){
        console.log(form);  
        console.log(userData);
        event.preventDefault()
        
        if(form.FullName && form.Username && form.Password && form.ConfirmPassword){
            sendUserData();
            setForm(userForm);
        }
        else{
            !form.FullName ? setFullNameErr("Name should not be empty"): setFullNameErr("");
            !form.Username ? setUserNameErr("Username should not be empty"): setUserNameErr("");
            !form.Password ? setPasswordErr("Password should not be empty"): setPasswordErr("");
            !form.ConfirmPassword ? setConfirmPasswordErr("Confirm Password should not be empty"): setConfirmPasswordErr("");
        }
        
    }

    function checkUserNameExist(){
        fetch(`http://localhost:8083/api/username_available/${form.Username}`,{
            method:"GET"
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.available){
                console.log("true: user do not exists");
                // setIsUsernameExist(data.available);
                userData.username = form.Username;
                return;
            }
            else{
                console.log(" exists");
                // setIsUsernameExist(!data.available);
                setUserNameErr("Username already exists");
                return;
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    function handleName(){
        
        setFullNameErr("");
        if(!form.FullName){
            setFullNameErr("Name should not be empty");
        }
        else{
            const regex = new RegExp('^[a-zA-Z][a-zA-Z ]*$');
            let userRegexMatch = regex.test(form.FullName);
            userRegexMatch ? userData.name = form.FullName : setFullNameErr("Name must include only letters (a-zA-Z)");
        }
    }

    function handleUserName(){
        
        setUserNameErr("");
        if(!form.Username){
            setUserNameErr("Username should not be empty");
        }
        else{
            const regex = new RegExp('^(?=.*[a-zA-Z])[a-zA-Z][a-zA-Z0-9]{5,}$');
            let userRegexMatch = regex.test(form.Username);
            userRegexMatch ? checkUserNameExist() :setUserNameErr("Username must contain alphanumeric characters only");
        }
    }

    function handlePassword(){
        
        setPasswordErr("");
        if(!form.Password){
            setPasswordErr("Password should not be empty");
        }
        else{
            const regex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-+=])[A-Za-z0-9!@#$%^&*()-+=]{8,}$`);
            let userRegexMatch = regex.test(form.Password);
            !userRegexMatch ? setPasswordErr("Password must be strong") : "";
        }
        
    }

    function handleConfirmPassword(){
        
        setConfirmPasswordErr("");
        if(!form.ConfirmPassword){
            setConfirmPasswordErr("Confirm Password should not be empty");
        }
        else{
            console.log("check");
            form.ConfirmPassword === form.Password ? userData.password = form.Password : setConfirmPasswordErr("Password did not match");
        }
        
    }

    return(
        <div className={`${styles.registerContainer} rounded-0`}>
            <form>
                <div className="form-group p-2">
                    <label className="form-label">Full Name*</label>
                    <input type="text" className={fullNameErr?`${styles.fieldBorderColor} form-control`:"form-control"} value={form.FullName} name="FullName" onChange={handleChange} onBlur={handleName}/>
                    {fullNameErr && <div className={styles.errorFormField}>
                        {fullNameErr}
                    </div>}

                </div>
                        
                        
                <div className="form-group p-2">
                    <label className="form-label">Username*</label>
                    <input type="text" className={userNameErr ? `${styles.fieldBorderColor} form-control`:"form-control"} name="Username" value={form.Username} onChange={handleChange} onBlur={handleUserName}/>
                    {userNameErr && <div className={styles.errorFormField}>
                        {userNameErr}
                    </div>}
                    <ul className={`${styles.formText} help-text`}>
                        <li>Your username must be 6 characters long.</li>
                        <li>Your username must contain both letters and numbers.</li>
                        <li>Your username should not contain any special characters.</li>
                    </ul>
                </div>
                    
                <div className="form-group p-2">
                    <label className="form-label">Password* </label>
                    <input type={showPassword?"password":"text"} className={ passwordErr ? `${styles.fieldBorderColor} form-control`:"form-control"} name="Password" value={form.Password} onChange={handleChange} onBlur={handlePassword}/>
                    <i className={`bi bi-eye-fill ${styles.eyeFill}`} onClick = {showHidePassword}></i>
                    {passwordErr && <div className={styles.errorFormField}>
                        {passwordErr}
                    </div>}
                    <ul className={`${styles.formText} help-text`}>
                        <li>Your password must be at least 8 characters long.</li>
                        <li>Your password must contain at least one of each of the following:</li>
                        <ul>
                            <li>Numbers (0-9)</li>
                            <li>Letters (a-z)</li>
                            <li>Capital letters (A-Z)</li>
                            <li>Special characters (!@#$%^&*()-+=)</li>
                        </ul>
                    </ul>
                </div>

                <div className="form-group p-2">
                    <label className="form-label">Confirm Password*</label>
                    <input type="password" className={ confirmPasswordErr ? `${styles.fieldBorderColor} form-control`:"form-control"} name="ConfirmPassword" value={form.ConfirmPassword} onChange={handleChange} onBlur={handleConfirmPassword}/>
                    {confirmPasswordErr && <div className={styles.errorFormField}>
                        {confirmPasswordErr}
                    </div>}
                </div>
                
                <div id="addRegisterMessage" className={styles.errorFormField}></div>

                <div className="row p-3 justify-content-center">
                    <button className={`btn text-white ${styles.registerBtn} rounded-0`} type="button" id="registerBtn" onClick={handleSubmit}>REGISTER</button>
                </div>
            </form>
           
        </div>
    );
}

export default RegisterUserForm
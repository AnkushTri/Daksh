import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let navigate = useNavigate();
    const { saveTokenInLocalStr } = useAuth();

    const onValueChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
        console.log(e)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://ankucrud-api.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const responseData = await response.json();
            console.log("after login: ", responseData.extraDetails);
            if (response.ok) {
                saveTokenInLocalStr(responseData.token);
                toast.success("login successful!")
                navigate("/");
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails[0] : responseData.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapper>
            <div className='registration_sec sec_form'>
                <h1>Login Form</h1>
                <div className='form'>
                    <form className='form_class' onSubmit={handleSubmit}>
                        <div className='form_sec'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='email'
                                value={user.email}
                                placeholder='Enter your email'
                                onChange={onValueChange}
                                required />
                        </div>
                        <div className='form_sec'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name='password'
                                value={user.password}
                                placeholder='Enter Your password'
                                onChange={onValueChange}
                                required />
                        </div>
                        <button type='submit' className='register_btn'>Login</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width:30%;
margin:0 auto;
input{
    padding:10px 10px;
}
.sec_form {
    align-items: center;
}
.form_class {
    display: flex;
    flex-direction: column;
}
.form_sec {
    width: 30%;
    font-size: 1.2rem;
}
.register_btn {
    width: 6rem;
    font-size: .7rem;
    margin-top: 0.3rem;
    border-radius: 10%;
    padding: 0.5rem;
    background-color: rgb(139, 41, 155);
    color: #FFFFFF;
    &:hover{
    cursor:pointer;
}
}

input {
    width: 20rem;
    padding: 0.4rem 0.5rem;
    margin-bottom: 0.6rem;
    color: grey;
    // color: #FFFFFF;
}

textarea {
    width: 15rem;
    height: 5rem;
}
`

export default Login
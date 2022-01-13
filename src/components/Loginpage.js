import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

function Loginpage() {

    // const validate = values =>{
    //     const errors = {}

    //     if (!values.username){
    //         errors.username = "Username required*"
    //     }else if(values.username.length<4){
    //         errors.username = "Must be 4 characters or more"
    //     }

    //     if (!values.password){
    //         errors.password = "Password required*"
    //     }
        
    //     return errors
    // }

    const formik = useFormik({
        initialValues : { username: "",
                          password: "" 
        },

        validationSchema: Yup.object({
            username: Yup.string()
                .min(6,"username is too short")
                .max(20,"username is too long")
                .required("Username required"),
            password: Yup.string()
                .min(6,"password is too short")
                .max(15,"password is too long")
                .required("Password required")
                .oneOf([Yup.ref("username"), null], "Username and password must not be the same")
        }),

        onSubmit : values =>{
            alert(JSON.stringify(values, null, 2))
        }
    
    });
    console.log(formik.errors);


    return (
        <div className='container'>
            <div className='left'>
                <h1>facebook</h1>
                <p>Facebook helps you connect and share <br/>with the people in your life.</p>
            </div>
            
            <div className='right'>
                <form onSubmit = {formik.handleSubmit}>

                    <input name='username' placeholder='Email address or phone number'
                            onChange={formik.handleChange} 
                            value={formik.values.username}
                    ></input>
                    {formik.errors.username ? <p className='errors'>{formik.errors.username}</p> : null}
                    
                    <input name='password' placeholder='Password'
                            onChange={formik.handleChange} 
                            value={formik.values.password}
                    ></input>
                    {formik.errors.password ? <p className='errors'>{formik.errors.password}</p> : null}
                    
                    <button href="" className="loginBtn" type='submit'>Log In</button>
                    <a href="" className="forget">Forgotten password?</a>
                    
                    <div className="sign-up">
                        <a href="" className="signupBtn">Create New Account</a>
                    </div>

                </form>

                <p><b className='para'>Create a Page</b> for a celebrity, band or business.</p>

            </div>

        </div>
        
    )
}

export default Loginpage



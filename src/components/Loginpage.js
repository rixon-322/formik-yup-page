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
        <div>
            <div className='header'>
                <h1>facebook</h1>
                <h2>Facebook helps you connect and share<br/> with the people in your life.</h2>
            </div>
            
            <div className='container'>
                <form className='form' onSubmit = {formik.handleSubmit}>

                    <input name='username' placeholder='Email address or phone number'
                            onChange={formik.handleChange} 
                            value={formik.values.username}
                    ></input> <br/>
                    {formik.errors.username ? <p className='errors'>{formik.errors.username}</p> : null}
                    
                    <input name='password' placeholder='Password'
                            onChange={formik.handleChange} 
                            value={formik.values.password}
                    ></input> <br/>
                    {formik.errors.password ? <p className='errors'>{formik.errors.password}</p> : null}
                    
                    <button className='login-btn'>Log In</button>
                    
                    <p className='for-pass'>Forgotten password?</p>
                    
                    <button className='create-btn' type='submit'>Create New Account</button>

                </form>
            </div>
            <div className='end-line'>
                <p><a href='#' className='para'>Create a Page</a>  for a celebrity, brand of business</p>
            </div>

        </div>
        
    )
}

export default Loginpage



import React from 'react'
import {useFormik} from 'formik'

function Loginpage() {

    const validate = values =>{
        const errors = {}

        if (!values.username){
            errors.username = "Username required*"
        }

        if (!values.password){
            errors.password = "Password required*"
        }
        
        return errors
    }

    const formik = useFormik({
        initialValues : { username: "",
                          password: "" 
    },

    validate,
    onSubmit : values =>{
        alert(JSON.stringify(values, null, 2))
    }
    
    })


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
                    {formik.touched.username && formik.errors.username ? <p className='errors'>{formik.errors.username}</p> : null}
                    
                    <input name='password' placeholder='Password' type='password'
                            onChange={formik.handleChange} 
                            value={formik.values.password} 
                    ></input> <br/>
                    {formik.touched.password && formik.errors.password ? <p className='errors'>{formik.errors.password}</p> : null}
                    
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



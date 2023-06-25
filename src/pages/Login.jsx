import React from 'react'
import './Login.css'
import { useState } from 'react' 
const Login=() => {
    const [passwordShown,setPasswordShown]=useState(false);
    const password =() => {
        setPasswordShown(!passwordShown);

    }

 {
  return (
    <div className="main">
            <form className="form" action="">
            <div className="formdiv">
                <label htmlfor="" className="login">LOGIN</label>
                <div className="mail">
                <label htmlfor="" class="email">EMAIL</label> 
                <input type="email" id="email" className="box" placeholder="enter email" title="EMAIL"/>
                </div>
                <div className="password">
                    <label htmlfor="password">PASSWORD</label>
                    <input type={passwordShown ? "text" : 'password'} id="password" className="box" placeholder="enter password" title="PASSWORD"/>
                </div>
                <div className='check'>
                    <input type='checkbox' onClick={password}/>Show Password

                </div>
                <input type='submit' className='btn' value="sign in"/>
                <div className='forgot'>
                    forgot <a className='link' href="">username / password</a>?

                </div>
                <div className='signup'>
                    Don't have account ? <a className='link' href=''>sign up</a>
                </div>
            </div>

        </form>
     </div>
  )
}
}
export default Login
import React,{useState, useSyncExternalStore} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import './Auth.css'
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'
import { signup,login } from '../../actions/auth'

const Auth = () => {


  const [isSignup,setIsSignup] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')


const dispatch = useDispatch()
const navigate = useNavigate()
  const handleSwitch =() =>{
    setIsSignup(!isSignup)
  }

const handleSubmit = (e) => {
  e.preventDefault()
  if (!email && !password){
    alert('Enter email and password')
  }
  if(isSignup){
    if(!name){
      alert("Enter a name to continue")
    }
    dispatch(signup({name,email,password},navigate))
  }else{
    dispatch(login({email,password},navigate))
  }
  
}

  return (
    <section class = 'auth-section'>
      {isSignup && <AboutAuth/>}
      <div class = 'auth-container'>
        {!isSignup && <img src={icon} alt = 'stack overflow' className = 'login-logo'/>}
        <form onSubmit = {handleSubmit}>
          {
            isSignup && (
              <label html for = 'name'>
                <h4>Display Name</h4>
                <input type = "text" id = 'name' name = 'name' onChange = {(e)=> {setName(e.target.value)}}/>

              </label>
            )
          }
          <label html for ="email">
            <h4>Email</h4>
            <input type = "email" name='email' id = 'email' onChange={(e)=> {setEmail(e.target.value)}}/>
          </label>
          <label html for = "password">
            <div>
              <h4>Password</h4>
                {!isSignup && <p style = {{color:"#007ac6",fontSize:"13px"}}>Forgot Password</p>}
            </div>
            
            <input type = "password" name = 'password' id = 'password'onChange = {(e)=> {setPassword(e.target.value)}}/>
            {isSignup && <p>Passwords must contain at least eight<br/> characters, including at least 1 letter and 1 <br/>number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor = 'check'>
                <input type = "checkbox" id='check'/>
                <p>Opt-in to receive occasional<br/> product updates, user research invitations,<br/> company announcements, and digests.</p>

              </label>
            )
          }
          <button type ='submit' className ='auth-btn'> {isSignup? 'Sign Up':'Log in'}</button>
          {
            isSignup && (
              <p style = {{color:"#666767",fontSize:"13px"}}>
                By clicking “Sign up”, you agree to our
                <span style = {{color:"#007ac6"}}> terms of service</span> and acknowledge you have read our
              an<span style = {{color:"#007ac6"}}> privacy policy</span>
                <span style = {{color:"#007ac6"}}> cookie policy</span>
              </p>
            )
          }
        </form>
        <p>
          {isSignup? 'Already have an account?' : "Don't have an account?"}
          <button type ='button' className ='handle-switch-btn' onClick = {handleSwitch}>{isSignup ? "Log in" :'sign up'}</button>
        </p>

      </div>

    </section>
  )
}

export default Auth

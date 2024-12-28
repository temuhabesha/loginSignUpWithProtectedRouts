import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [values,setvalues] = useState({
        username:"",
        email:"",
        password:""
    })

  const hanlechanges = (e) =>{
    setvalues({...values, [e.target.name]:[e.target.value]})
  }
 const handlesubmit = async(e) =>{
    e.preventDefault()
   try {
    const response = await axios.post('http://localhost:3000/auth/register',values)
    console.log(response)
   } catch (error) {
    console.log(error)
   }
 }
  return (
    <div>
      <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='enterr user name' name='username' onChange={hanlechanges}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" placeholder='enterr email email' name='email' onChange={hanlechanges}/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" placeholder='enterr the password' name='password' onChange={hanlechanges}/>
            </div>
            <button>submit</button>
        </form>
        <div>
            <p>Alrady have account</p>
            <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register

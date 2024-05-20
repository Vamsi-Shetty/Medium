import axios from 'axios';
import { useState } from 'react';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email)

    axios.get('/http://localhost:3000/users', {
          email: email,
          password: password
    })
    .then(function (response) {
      console.log(response);
    });

    
  }
  
  return (
    <div>
      <form action="" onSubmit={(e) => {handleLogin(e)}}>
        <label htmlFor="">Email</label>
        <input type="text" name="" id="name" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/><br />
        <label htmlFor="">Password</label>
        <input type="text" name="" id="name" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/><br />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default SignIn;
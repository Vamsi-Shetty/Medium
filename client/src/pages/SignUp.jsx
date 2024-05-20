import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users', {
      name:name,
      email:email,
      password:password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {handleSignup(e)}}>
        <label htmlFor="">Full Name</label>
        <input type="text" name="" id="name" placeholder='Enter Full Name' onChange={(e) => {setName(e.target.value)}}/><br />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="name" placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/><br />
        <label htmlFor="">Password</label>
        <input type="text" name="" id="name" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/><br />
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}

export default SignUp;
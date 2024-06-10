

const SignIn = () => {
  
  return (
    <div>
      <form>
        <label>Email</label>
        <br />
        <input
         type="text" 
         placeholder="Enter Email"
        />
        <br />
        <label>Password</label>
        <br />
        <input
         type="text" 
         placeholder="Enter Password"
        />
        <br />
        <input type="button" value="Sign in" />
      </form>
    </div>
  )
}

export default SignIn;
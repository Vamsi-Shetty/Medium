import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center h-screen md:h-auto'>
      <div>
        <h1>Create an account</h1>
        <h6>
          Already have an account? {" "}
          <Link to='/signin' className='underline'>Login</Link>
        </h6>
      </div>
      <div className='text-left'>
        <form>
          <label htmlFor="">Name</label><br />
          <input
            className='border-2 my-2 p-1 rounded-md'
            type="text" 
            placeholder='Enter Name' 
           />
           <br />
          <label htmlFor="">Email</label>
          <br />
          <input
             className='border-2 my-2 p-1 rounded-md'
             type="text" 
             placeholder='Enter email'
             /><br />
          <label htmlFor="">Password</label>
          <br />
          <input
            className='border-2 my-2 p-1 rounded-md'
            type="text" 
            placeholder='Enter Password'
            />
          <br />
          <input
           className='w-full bg-black text-white p-4 rounded-md flex justify-center items-center gap-4'
           type="button" value="Signup" />
        </form>
      </div>
    </div>
  )
}

export default SignUp;
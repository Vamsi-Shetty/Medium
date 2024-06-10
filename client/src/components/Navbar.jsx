import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='signup'>Sign Up</NavLink>
        <NavLink to='signin'>Sign in</NavLink>
    </div>
  )
}

export default Navbar
import './App.css';
import {Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App

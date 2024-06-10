import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {navigate('cart')}}>Click me!</button>
    </div>
  )
}

export default LandingPage
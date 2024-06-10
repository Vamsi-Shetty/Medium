import {useNavigate} from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>Cart</h1>
        <button onClick={() => {navigate(-1)}}>Back</button>
    </div>
  )
}

export default Cart
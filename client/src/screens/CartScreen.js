import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartItems, getTotals, removeFromCart, getCartTotalAmount, getCartTotalQuantity } from '../features/slice/cartSlice'
import CartItem from '../components/CartItem'

const CartScreen = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(getCartItems);
  const totalQuantity = useSelector(getCartTotalQuantity)
  const totalAmount = useSelector(getCartTotalAmount)

  useEffect(() =>{
    dispatch(getTotals())
  }, [cartItems, dispatch])

  const removeHandler = (cartItems) => {
    dispatch(removeFromCart(cartItems))
  }

  return (
    <div className='cartscreen'>
      <div className="cartscreen-left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ): cartItems.map(item => (
          <CartItem key={item._id} item={item} removeHandler={removeHandler}/>
        ))}
      </div>
      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>Subtotal ({totalQuantity}) items</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
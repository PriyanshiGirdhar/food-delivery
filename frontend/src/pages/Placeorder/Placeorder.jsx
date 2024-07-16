import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
const Placeorder = () => {
  const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="placeorder-left">
        <p className="title">Delivery-information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="text" placeholder='Email Address' /><input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type='text' placeholder='Phone'/>
      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()==0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder

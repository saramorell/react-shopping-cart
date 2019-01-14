import React, { Component } from 'react';
import CartItem from './CartItem';


const CartItems = (props) => {
        return (
          <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-md-8">Product</div>
                  <div className="col-md-2">Price</div>
                  <div className="col-md-2">Quantity</div>
                </div>
                </div>
                    {props.cartItemsList.map(item => <CartItem
                      key={item.id}
                      name={item.product.name}
                      priceInCents={item.product.priceInCents}
                      quantity={item.quantity}
                      />)}
                  </div>
                    <div>
                      <h4>
                      Total: ${props.cartItemsList.reduce((total, item)=>{
                        return total + (item.product.priceInCents * item.quantity).toFixed(2)/100
                      },0)}
                      </h4>
                    </div>
                </div>
        )
}

export default CartItems;

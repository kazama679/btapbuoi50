import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Cart } from '../../interface';

export default function Cart() {
  const cart: any = useSelector(state => {
    console.log(99999999999999);
    
    return state
  });
  const disPatch = useDispatch();
  console.log('cart', cart);
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    console.log('ggggggggggggggggg', e.target.value, id);
    disPatch({
      type: "UPDATE_QUANTITY",
      payload: {
        value: e.target.value,
        id: id
      }
    })
  }
  const handleDelete = (id: number) => {
    console.log('qqqqqqqqqqqqqqqq', id);
    disPatch({
      type: "DELETE_CART",
      payload: id
    })
  }
  // tính tổng tiền cần trả
  const AllMoney=(n:Cart[])=>{
    let allMoney:number=0;
    console.log('111111111111111111111111111111a',n);
    for (let i = 0; i < n.length; i++) {
      allMoney+=n[i].quantity*n[i].price
    }
    return allMoney
  }
  return (
    <div>
      <div className="">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: "4%" }}>STT</th>
                  <th>Name</th>
                  <th style={{ width: "15%" }}>Price</th>
                  <th style={{ width: "4%" }}>Quantity</th>
                  <th style={{ width: "25%" }}>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {
                  cart.cartReducer.map((cart: Cart, index: number) => {
                    return (<tr>
                      <th scope="row">{index + 1}</th>
                      <td>{cart.name}</td>
                      <td>{cart.price}</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          value={cart.quantity}
                          className='cartQuantity'
                          min="1"
                          onChange={(e) => handleQuantity(e, cart.id)}
                        />
                      </td>
                      <td>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
                          onClick={() => handleDelete(cart.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>)
                  })
                }
              </tbody>
              <tfoot id="my-cart-footer">
                <tr>
                  <td colSpan={4}>
                    There are <b>{cart.cartReducer.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    total: {AllMoney(cart.cartReducer)} USD
                  </td> 
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="alert alert-success" role="alert" id="mnotification">
          Add to cart successfully
        </div>
      </div>
    </div>
  )
}
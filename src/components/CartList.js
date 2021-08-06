import CartProductCard from "./cards/CartProductCard";
import { useSelector } from 'react-redux';

const CartList = () => {
  const myCart = useSelector((state) => state.cartReducer);
  console.log(myCart);
  return (
    <div className="cart-container">
      <p className="cart-title">Your Cart</p>
      <div className="">
        
        {
        myCart.cartProducts?.length !== 0 ? myCart?.cartProducts.map((item, index) => <CartProductCard key={index} item={item} />)
      : (<div className="empty-cart"> 
      <p>
        Your cart is empty...
      </p>
        </div>)
      }
        
      </div>
    </div>
  )
}
export default CartList;
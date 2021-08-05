import CartProductCard from "./cards/CartProductCard";
import { useSelector, useDispatch } from 'react-redux';

const CartList = () => {
  const myCart = useSelector((state) => state.cartReducer);
  console.log(myCart);
  return (
    <div className="cart-container">
      <p className="cart-title">Your Cart</p>
      {
        myCart.cartProducts.map((item, index) => <CartProductCard key={index} item={item} />
        )}
    </div>
  )
}
export default CartList;
import CartProductCard from "./cards/CartProductCard";
import { useSelector } from 'react-redux';

const CartList = () => {
  const cartProductList = useSelector((state) => state.cartReducer);

  return (
    <div className="cart-container">
      <p className="cart-title">Your Cart</p>
      <div className="">
        {
          cartProductList.cartProducts?.length !== 0 ? cartProductList?.cartProducts.map((item, index) => <CartProductCard key={index} item={item} />)
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
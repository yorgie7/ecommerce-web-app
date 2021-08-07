
import { removeProductFromCart } from '../../actions/CartActions';
import { useDispatch } from 'react-redux';



const CartProductCard = ({ item }) => {
    const dispatch = useDispatch();
    console.log(item, "hyyy")
    return (
        <div className="cart-item">

            <img src={item.productImage} style={{ width: "30%", height: "70px" }} alt="img" />
            <div className="cart-item-details">
                <div className="">
                    <p style={{ margin: "4px 0", fontWeight: "600" }}>{item.name}</p>
                    <p style={{ margin: "4px 0", fontSize: "14px", fontWeight: "500" }}>Rs. {item.price * item.quantity} /-</p>

                </div>
                <button className="remove-button" onClick={() => dispatch(removeProductFromCart(item.id))}>Remove from Cart </button>
            </div>
            <div style={{ textAlign: "center" }}>
                {/* <p>{item.quantity}</p> */}
            </div>
        </div>
    )

}
export default CartProductCard;
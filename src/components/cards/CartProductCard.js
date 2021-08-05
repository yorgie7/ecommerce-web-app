
import { removeFromCart } from '../../actions/index';
import { useDispatch } from 'react-redux';



const CartProductCard = ({ item }) => {
    const dispatch = useDispatch();
console.log(item,"hyyy")
    return (
        <div style={{ width: "", border: "1px solid #c5c5c5", padding: "8px", margin: "10px 20px"}} className="row">

            <img src={item.productImage} style={{ width: "30%", height: "70px" }} />
            <div>
                <div className="row">
                    <p >{item.name}</p>
                    <p >{item.price}</p>
                    <p>{item.quantity}</p>
                </div>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
            </div>
        </div>
    )

}
export default CartProductCard;
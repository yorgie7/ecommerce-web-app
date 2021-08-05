
import { addToCart } from '../../actions/index';
import { useDispatch } from 'react-redux';

const ProductCard = ({item}) => {
    const dispatch = useDispatch();

    return (
    <div className="product-card-container">

        <img src={item.productImage} style={{ width: "100%", height: "140px" }} />
        <div className="row"> 
        <p>{item.name}</p>
        <p>Rs : {item.price}/-</p>
</div>
        <button className="add-button" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
    </div>
    )

}
export default ProductCard;
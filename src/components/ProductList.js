import { useSelector} from 'react-redux';
import ProductCard from "./ProductList";

const ProductList = () => {
  const myState = useSelector((state) => state.products);
  
    return (
    
      <div style={{ width: "70%" }} className="ProductCard divHideScroll">
        {myState.isLoading ? <p>Loading..</p> : myState.products.map((product, index) => (
          <ProductCard key={index} item={product} />
        )
        )}
      </div>


    )
}
export default ProductList;
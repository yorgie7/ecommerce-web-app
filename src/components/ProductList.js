import { useSelector } from 'react-redux';
import ProductCard from "./cards/ProductCard";

const ProductList = () => {
  const productList = useSelector((state) => state.products);

  return (
    <div style={{ width: "70%" }} className="ProductList divHideScroll">
      {productList.isLoading ? <p>Loading..</p> : productList?.products.map((product, index) => (
        <ProductCard key={index} item={product} />)
      )}

    </div>
  )
}
export default ProductList;
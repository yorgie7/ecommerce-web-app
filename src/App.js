import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import CartList from './components/CartList';
import ProductList from './components/ProductList';
import ProductCard from './components/cards/ProductCard';
import { useDispatch , useSelector} from 'react-redux';
import { setProducts, setLoading} from './actions/index'

function App() {

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.products);

  useEffect(() => {
    const load = async () => {
      await dispatch(setLoading(true))
      // await dispatch(setProducts(data))
      await getProductList()
      await dispatch(setLoading(false))
    }
    load()
  }, [])

  const getProductList = async () => {
    fetch("/json/productList.json")
      .then(response => response.json()).then(data => {
        dispatch(setProducts(data));
      })
  }
console.log("hy", myState)
  return (<>
    <Header />
    <div className="cntnr">

      <div style={{ width: "70%" }} className="ProductList divHideScroll">
        {myState.isLoading ? <p>Loading..</p> : myState.products.map((product, index) => (
          <ProductCard key={index} item={product} />
        )
        )}
      </div>
      <CartList />

    </div>
  </>
  );
}

export default App;

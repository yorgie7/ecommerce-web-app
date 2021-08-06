import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import CartList from './components/CartList';
import ProductList from './components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListData } from './actions/index'

function App() {

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductListData());

  }, [])

  return (
    <div className="main-cntnr">
      <Header />
      <div className="cntnr">

        <ProductList />
        <CartList />

      </div>
    </div>
  );
}

export default App;

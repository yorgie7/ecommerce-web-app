import { useEffect } from 'react';
import Header from './components/Header';
import CartList from './components/CartList';
import ProductList from './components/ProductList';
import { useDispatch } from 'react-redux';
import { getProductListData } from './actions/ProductActions'
import './App.css';

function App() {

  const dispatch = useDispatch();

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

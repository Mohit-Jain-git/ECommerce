import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <ProductList></ProductList>
      <Product />
      <Register></Register>
      <Login></Login>
      {<Cart></Cart>}
    </div>
  );
}

export default App;

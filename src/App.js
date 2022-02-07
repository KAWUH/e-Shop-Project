import { useState } from 'react';
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import products from "./Products";

function App() {

  const { productInfo } = products;
  const [categories, setCategories] = useState("");
  const [cartItems, setCartItems] = useState([]);


  const handleClickV = () => {
    setCategories("Vegetables");
  }

  const handleClickF = () =>{
    setCategories("Fruits");
  }

  const handleClickD = () =>{
    setCategories("Dairy");
  }

  const handleClickA = () =>{
    setCategories("");
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist) {setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))}
    else {setCartItems([...cartItems, {...product, qty: 1}])};
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {setCartItems(cartItems.filter((x) => x.id !== product.id))}
    else {setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))}
  } 

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>

      <div className='row block column2 cButtonDiv'>
        <button className='cButton' onClick={handleClickV}>Show Vegetables</button>
        <button className='cButton' onClick={handleClickF}>Show Fruits</button>
        <button className='cButton' onClick={handleClickD}>Show Dairy Products</button>
        <button className='cButton' onClick={handleClickA}>Show All Products</button>
      </div>

      <div className="row">
        <Main onAdd={onAdd} productInfo={productInfo} category={categories}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>

  );
}

export default App;

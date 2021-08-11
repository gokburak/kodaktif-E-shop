import React,{useEffect,useState} from 'react';
import Item from "./Item"
import './App.css';
import Total from "./Total"


function App() {

  const [cart,setCart] = useState([]);

  let amount =0;
  let itemCount=0;

  useEffect(async () =>{
    let data =await fetch("https://fakestoreapi.com/products?limit=6");
    let result =await data.json();
   
    setCart(result);
    // getItems()

  },[])


  return (
  <>
    <h1>
      Sepetim <p>{cart.length}</p>
      <h4>Ürün</h4>
    </h1>
    <div className="itemList">
      {cart.map((item) =>(
        <Item
        key={item.id}
        itemid={item.id}
        image={item.image}
        title={item.title}
        category={item.category}
        price={item.price}
        />
      ))}
    </div>
    {
      (cart.forEach((item)=>(amount=amount+item.price))),
      (<Total totalPrice={amount.toFixed(2)} />)
    }
  </>
  );
}

export default App;

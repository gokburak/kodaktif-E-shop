import React, { useEffect, useState } from "react";
// import "./App.css";
import styled from 'styled-components';
import Item from "./Item";




function App() {
  const [items, setItems] = useState([])

  useEffect(async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json()
    console.log(result);
    setItems(result)

    // const veri = await fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(json=>console.log(json))


  }, [])

  return (
    <div>
      <Header>

        <input type="text" />
        <button>Search</button>
      </Header>
      <Items>
        {items.map((item) => (<Item key={item.id} veri={item}

        />))}

      </Items>
    </div>
  )
}

export default App;

const Header = styled.header`

display : flex;
min-height:10vh;
align-items:center;
justify-content:center;
border-bottom:1px solid rgba(0,0,0,0.2);
font-size:1rem;
input{
  padding:.5rem;
  margin-right:.5px;
  width:300px;
  outline:none
}
button{
  padding:.5rem 2rem;
  margin-right:5px;
  transition: .2s ease;
  cursor:pointer
}

button:hover{
  background:aqua;
   color:white;
   border:none
}
`
export const Items = styled.div`
margin-top:20px;
display:grid;
grid-template-columns:repeat(auto-fit,400px);
gap:10px;
min-height:80vh;
width:90vw;
margin:10px auto


`












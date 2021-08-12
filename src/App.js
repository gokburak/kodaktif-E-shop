import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./App.css";
import Total from "./Total";

function App() {
  const [cart, setCart] = useState([]);

  let amount = 0;
  let itemCount = 0;

  useEffect(async () => {
    let data = await fetch("https://fakestoreapi.com/products?limit=6");
    let result = await data.json();

    setCart(result);
    getItems();
  }, []);

  return (
    <>
      <h1 className="myCart">
        Sepetim <p>{cart.length}</p>
        <h4>Ürün</h4>
      </h1>
      <div className="main">
        <div className="itemList">
          {cart.map((item) => (
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
          (cart.forEach((item) => (amount = amount + item.price)),
          (<Total totalPrice={amount.toFixed(2)} />))
        }
      </div>
    </>
  );
  function getItems() {
    let cartItems = document.querySelectorAll(".CartItem");
    cartItems.forEach((item, index) => {
      itemCount = cartItems.length;
      item.querySelector(".delete").classList.add("visible");
      item.addEventListener("click", (e) => {
        switch (e.target.textContent) {
          case "+": {
            let count = item.querySelector(".amount").textContent;
            let productPrice = item.querySelector(".details h2").textContent;
            count++;
            if (count > 1) {
              item.querySelector(".delete").classList.remove("visible");
            }
            item.querySelector(".amount").textContent = count;
            item.querySelector(".details h5").textContent =
              (productPrice*count).toFixed(2) + " TL. ";
            let tprice = Math.max(
              document.querySelector(".checkout h4").textContent
            );
            let cargoFreePrice = tprice + productPrice*count;
            if (cargoFreePrice > 500) {
              document.querySelector(".freeShipping").classList.add("visible");
              document
                .querySelector(".cargoAmountTl")
                .classList.add("cargoPriceDelete");
            } else {
              document.querySelector(".freeShipping").classList.remove("visible");
              document
                .querySelector(".cargoAmountTl")
                .classList.remove("cargoPriceDelete");
            }
            document.querySelector(".checkout h4").textContent = Math.fround(
              tprice + productPrice*1
            ).toFixed(2);
            document.querySelector(".orderAmount").textContent =
              document.querySelector(".checkout h4").textContent + "TL";
            break;
          }
          case "-": {
            let count = item.querySelector(".amount").textContent;

            if (count != 1) {
              let productPrice = item.querySelector(".details h2").textContent;
              count--;
              if (count < 2) {
                item.querySelector(".delete").classList.remove("visible");
              }
              item.querySelector(".amount").textContent = count;
              item.querySelector(".details h5").textContent =
                (productPrice * count).toFixed(2) + " TL. ";
              let tprice = Math.max(
                document.querySelector(".checkout h4").textContent
              );
              let cargoFreePrice = tprice - productPrice * count;
              if (cargoFreePrice < 500) {
                document
                  .querySelector(".freeShipping")
                  .classList.add("visible");
                document
                  .querySelector(".cargoAmountTl")
                  .classList.add("cargoPriceDelete");
              } else {
                document
                  .querySelector(".freeShipping")
                  .classList.add("visible");
                document
                  .querySelector(".cargoAmountTl")
                  .classList.remove("cargoPriceDelete");
              }
              document.querySelector(".checkout h4").textContent = Math.fround(
                tprice - productPrice * 1
              ).toFixed(2);
              document.querySelector(".orderAmount").textContent =
                document.querySelector(".checkout h4").textContent + "TL";
              break;
            }
          }
          case "SİL": {
            let productPrice = item.querySelector(".details h2").textContent;
            let tprice = Math.max(
              document.querySelector(".checkout h4").textContent
            );
            document.querySelector(".checkout h4").textContent = Math.max(
              tprice - productPrice * 1
            ).toFixed(2);
            document.querySelector(".orderAmount").textContent =
              document.querySelector(".checkout h4").textContent + "TL";
            cartItems.item(index).getElementsByClassName.animation =
              "removeAnimation 0.5s ease";
            cartItems.item(index).addEventListener("animationend", () => {
              cartItems.item(index).remove();
              itemCount--;
              document.querySelector(".myCart p").textContent = itemCount;
            });
            break;
          }
        }
      });
    });
  }
}

export default App;

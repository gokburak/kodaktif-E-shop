import React from 'react'
import "./Total.css"
function Total({totalPrice}) {
    return (
        <div className="checkout">
            <h1>ÖDENECEK TUTAR</h1>
            <div className="money">
                <h4>{totalPrice}</h4>
                <p>TL</p>
            </div>
            <button>Alışverişi tamamla</button>
            <p className="description" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in cum itaque iste debitis harum voluptate quae aliquam officiis distinctio! Molestias iusto autem illum velit. Placeat repellendus dolores minima deserunt?
            </p>
            <div className="cargo">
                <div className="cargoAmount">
                    <p>Kargo</p>
                    <p className="freeShipping">Bedava</p>
                    <p className="cargoAmountTl">12</p>
                </div>
                <div className="orderTotal">
                    <p>Ürünler</p>
                    <p className="orderAmount">{totalPrice}TL</p>
                </div>
            </div>
            
        </div>
    )
}

export default Total

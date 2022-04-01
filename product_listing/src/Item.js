import React from 'react';
import styled from 'styled-components';



function Item({ veri }) {


    return (

        <ListItem>
            <img src={veri.image} alt="img" />
            <div className="itemDescription">
                <h3>{veri.title}</h3>
                <p>{veri.category.toLowerCase()}</p>
                <p className="price">Price : {veri.price}</p>
                <p>{veri.description.length > 250 ? (veri.description.substring(0, 200) + "...") : (veri.description)}</p>
            </div>

        </ListItem>

    )
}

export default Item;

const ListItem = styled.div`
height:300px;
width:400px;
border:1px solid rgba(0,0,0,0.1);
border-radius:25px;
overflow:hidden;
cursor:pointer;
img{
    height:300px;
    width:100%;
    object-fit:cover;
    object-position:top;
}


.itemDescription{
    height:100%;
    transition:0.5s ease;
    background:rgba(0,0,0,0.4);
    opacity:0;
    color:white;

    h3{
        padding:.3rem;
        text-align:center;
    }
    p{
        padding:.5rem;
        margin-top:-10px;
        margin-left:5px;
        margin-bottom:5px;
    }
    .price{
        font-weight:bold;
        font-size:1.2rem
    }
}

&:hover{
    .itemDescription{
        opacity:1;
        transform:translateY(-280px)

    }
}

`

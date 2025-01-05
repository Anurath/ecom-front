
import coffee from '../assets/ProductImgs/coffee.jpg'
import dryFruit from '../assets/ProductImgs/dryFruit.png'
import stationary from '../assets/ProductImgs/stationary.jpg'
import toy from '../assets/ProductImgs/toy.jpg'
import fashion from '../assets/ProductImgs/fashion.jpg'

import style from '../assets/style/style.png';
import style3 from '../assets/style/style3.png';
import style4 from '../assets/style/style4.png';
import style5 from '../assets/style/style5.png';
import style6 from '../assets/style/style6.png';
import style7 from '../assets/style/style7.png';

import shoes from '../assets/style/shoes.png';
import shoes1 from '../assets/style/shoes1.png';
import shoes2 from '../assets/style/shoes2.png';
import shoes3 from '../assets/style/shoes3.png';
import shoes4 from '../assets/style/shoes4.png';
import shoes5 from '../assets/style/shoes5.png';

import air from '../assets/style/air.png';
import air1 from '../assets/style/air1.png';
import air2 from '../assets/style/air2.png';
import air3 from '../assets/style/air3.png';
import air4 from '../assets/style/air4.png';


import tshirt1 from '../assets/groupImgs/tshirt1.png'
import tshirt2 from '../assets/groupImgs/tshirt2.png'
import tshirt3 from '../assets/groupImgs/tshirt3.png'
import tshirt4 from '../assets/groupImgs/tshirt4.png'

import hero from '../assets/hero.png'

import gift from '../assets/groupImgs/gift.png'
import gift1 from '../assets/groupImgs/gift1.png'
import gift2 from '../assets/groupImgs/gift2.png'
import gift4 from '../assets/groupImgs/gift4.png'

import home from '../assets/groupImgs/home.png'
import home1 from '../assets/groupImgs/home1.png'
import home2 from '../assets/groupImgs/home2.png'
import home3 from '../assets/groupImgs/home3.png'

import sport from '../assets/groupImgs/sport.png'
import sport1 from '../assets/groupImgs/sport1.png'
import sport2 from '../assets/groupImgs/sport2.png'
import sport3 from '../assets/groupImgs/sport3.png'



import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    let [cart, setCart] = useState([
        {
            imgUrl: air3,
            name: "Noise Buds",
            tagline:10,
            price:300
        },
    ])

    let handleAddCart = (product) => {
        let isProductInCart = cart.some((cartItem) => cartItem.name === product.name);
    
        if (!isProductInCart) {
            setCart([...cart, product]);
        }
    };

    let handleRemoveCart = (index) => {
        let newCarts=cart.filter((_,i)=>i!=index);
        setCart(newCarts);
    }

    let handleTotalPrice=()=>{
        let sum=0;
        let i=0;
        while(i<cart.length){
            sum=sum+cart[i].price;;
            i++;
        }
        return sum;
    }
    let totalAmount=handleTotalPrice();

    let handleDiscount=()=>{
        let discount=0;
        let i=0;
        let save=0;
        while(i<cart.length){
            save=save+((cart[i].price*100)/(100-cart[i].tagline)-cart[i].price);
            i++;
        }
        return save;
    }
    let totalSave=Math.floor(handleDiscount());

    return (
        <CartContext.Provider value={{ cart, handleAddCart, handleRemoveCart,totalAmount,totalSave }} > 
            {children} 
        </CartContext.Provider>
    )
}
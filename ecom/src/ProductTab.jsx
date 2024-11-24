import Product from "./Product";
import coffee from './assets/ProductImgs/coffee.jpg'
import dryFruit from './assets/ProductImgs/dryFruit.png'
import stationary from './assets/ProductImgs/stationary.jpg'
import toy from './assets/ProductImgs/toy.jpg'
import fashion from './assets/ProductImgs/fashion.jpg'
import ProductHead from "./ProductHead";

import './ProductTab.css'
export default function ProductTab(){
    let productInfo=[
        {
            imgUrl:toy,
            name:"Soft Toys",
            tagline:"Upto 70% Off"
        },
        {
            imgUrl:dryFruit,
            name:"Dry fruits",
            tagline:"Upto 75% Off"
        },
        {
            imgUrl:coffee,
            name:"Coffee Power",
            tagline:"Upto 70% Off"
        },
        {
            imgUrl:stationary,
            name:"Top Selling",
            tagline:"From Rs.49"
        },
        {
            imgUrl:fashion,
            name:"New Fashion",
            tagline:"From Rs.399"
        }
    ]
    return(
        <div className="main">
            <div className="title">
                <ProductHead />
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="ProductTab">
            <Product productInfo={productInfo} />
        </div>
        </div>
    )
}
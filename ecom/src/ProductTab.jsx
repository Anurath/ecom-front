import Product from "./Product";

import ProductHead from "./ProductHead";

import './ProductTab.css'
export default function ProductTab({productInfo}){
    
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
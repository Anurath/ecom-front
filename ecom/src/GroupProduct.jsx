

import { useContext } from 'react';
import './GroupProduct.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from './Context/CartContext';

export default function GroupProduct({product}) {

    const {handleAddCart}=useContext(CartContext);

    return (
        <div className="GroupProduct">
            <img id='groupImg' src={product.imgUrl} style={{ width: "99%" }}  alt="" />
            <div id='infoData'>
                <p> {product.name} </p>
                <p id='special' style={{ color: "green"}}>Min {product.tagline}% Off </p>
                <button className='addToCartGroupBtn'  onClick={()=>handleAddCart(product)} > <AddShoppingCartIcon /> </button>
            </div>
        </div>
    )
}
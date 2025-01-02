import './Product.css'

import { CartContext } from './Context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
export default function Product({ productInfo }) {

  const {handleAddCart}=useContext(CartContext);

    return (
        <>
            {
                productInfo.map((product) => (
                    <div className="Product">
                        <img src={product.imgUrl} height={150} width={150} alt="" />
                        <div className="info">
                            <p> {product.name} </p>
                            <h4> Upto {product.tagline}% Off</h4>
                            <button className='addToCartButton' onClick={()=>handleAddCart(product)}> <AddShoppingCartIcon /> </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
} 
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Cart.css';
export default function Cart() {
    const { cart , handleRemoveCart} = useContext(CartContext);

    return (
        <div className="Carts">

            {
                cart.map((cart,index) => (
                    <div key={index} className="singleCart">
                        <img src={cart.imgUrl} height={100} width={100} alt="imageMissing" />
                        <h3> {cart.name} </h3>
                        <h4> &#8377; {cart.price} </h4>
                        <div className='CartIcons'>
                            <button className='cartRemoveButton' onClick={() => handleRemoveCart(index)}><DeleteIcon /></button>
                            <FavoriteBorderIcon />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import empty_cart from '../assets/empty_cart.png';
import { Link } from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Cart.css';
export default function Cart() {
    const { cart, handleRemoveCart, totalAmount, totalSave } = useContext(CartContext);

    let LikeButton = (event) => {
        event.target.classList.toggle("LikeButton");
    }

    return (
        <div className='CartsContainer'>
            <div className="Carts">

                {
                    cart.map((cart, index) => (
                        <div key={index} className="singleCart">
                            <div className='ImageDiv'>
                                <img src={cart.imgUrl} height={100} width={100} alt="imageMissing" />
                                <label htmlFor="ItemCount"></label>
                                <select name="ItemCount" id="ItemCount">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>
                            <div className="middleBox">
                                <p> {cart.name} </p>
                                <div className='priceBox'>
                                    <h3 className='DiscountPrice'>&#8377;{cart.price} </h3>
                                    <h4 className='OriginalPrice'>&#8377;{Math.floor([(cart.price) / (100 - cart.tagline)] * 100)} </h4>
                                    <h4 className='DiscountPerc'> {cart.tagline}% off </h4>
                                </div>
                                <div className="Actions">
                                    <p id='SaveForLeter'>SAVE FOR LETER</p>
                                    <button id='RemoveBtn' className='cartRemoveButton' onClick={() => handleRemoveCart(index)}> REMOVE</button>
                                </div>
                            </div>
                            <div className='CartIcons'>
                                <button className='LikeBtns' onClick={LikeButton}>
                                    <div className='fa-regular'> <FavoriteBorderIcon /> </div>
                                    <div className='fa-solid'> <FavoriteIcon /> </div>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                cart.length > 0 ? <div className="TotalAmount">
                    <p className='save' >You will save &#8377;{totalSave} on this order </p>
                    <div className='TotalPrice'>
                        <p> &#8377;{totalAmount + totalSave} </p>
                        <b className='totalAmount'>&#8377;{totalAmount} </b>
                    </div>
                    <Link to="/login"><button className='placeOrderBtn'>PLACE ORDER</button></Link>
                </div> :
                    <div className='EmptyCart'>
                        <img id='EmptyCartImg' src={empty_cart} alt="" />
                        <h1>Oops! Looks like your cart is empty.</h1>
                    </div>
            }
        </div>
    )  
}     
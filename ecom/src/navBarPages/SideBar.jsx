import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import icocFlipkart from '../assets/iconFlifkart.png';

import PersonIcon from '@mui/icons-material/Person';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PagesIcon from '@mui/icons-material/Pages';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import LanguageIcon from '@mui/icons-material/Language';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkIcon from '@mui/icons-material/Work';

import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import DiscountIcon from '@mui/icons-material/Discount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from '../Context/CartContext';
import NotificationsIcon from '@mui/icons-material/Notifications';


import ListIcon from '@mui/icons-material/List';
import Close from "@mui/icons-material/Close";
import './SideBar.css'
export default function SideBar() {
    let [isVisible, setIsvisible] = useState(false);

    let {cart}=useContext(CartContext);

    let handleClass = () => {
        setIsvisible(!isVisible);
    }
 
    return (
        <>
            <div className={`SideBar ${isVisible ? "Visible" : ""}`}>
                <div>
                    <button className='SideBarCloseBtn' onClick={handleClass}> <Close /> </button>
                    <div id='LoginAndSign' className='SideBarBox'>
                        <Link className='LoginAndSign' to="/login"><PersonIcon /></Link>
                        <Link className='LoginAndSign' to="/login"><p>Login & SignUp</p> </Link>
                        <img id='imgLogo' src={icocFlipkart} alt="" />
                    </div>
                    <div className='SideBarBox1'>
                        <div className='SuperCoin'>
                            <ElectricBoltIcon className='sideBarIcon' />
                            <p>SuperCoin Zone</p>
                        </div>
                        <div className='SuperCoin'>
                            <PagesIcon className='sideBarIcon' />
                            <p>Flipkart Plus Zone</p>
                        </div>
                    </div>
                    <div className='SideBarBox1'>
                        <div className='SuperCoin'>
                            <BorderAllIcon className='sideBarIcon' />
                            <p>All Categories</p>
                        </div>
                        <div className='SuperCoin'>
                            <BlurCircularIcon className='sideBarIcon' />
                            <p>More on Flipkart</p>
                        </div>
                    </div>
                    <div className='SideBarBox'>
                        <div className='SuperCoin'>
                            <LanguageIcon className='sideBarIcon' />
                            <p>Choose Language</p>
                        </div>
                    </div>
                    <div className='SideBarBox1'>
                        <div className='SuperCoin'>
                            <LocalOfferIcon className='sideBarIcon' />
                            <p>Offer Zone</p>
                        </div>
                        <div className='SuperCoin'>
                            <Link id='seller' to="/becomeseller"> <WorkIcon className='sideBarIcon' /></Link>
                            <Link id='seller' to="/becomeseller" ><p>Sell on Flipkart</p></Link>
                        </div>
                    </div>
                    <div className='SideBarBox2'>
                        <div className='SuperCoin'>
                                <MarkunreadMailboxIcon className='sideBarIcon' />
                                <p>My Orders</p>
                        </div>
                        <div className='SuperCoin'>
                                <DiscountIcon className='sideBarIcon' />
                                <p>Coupons</p>
                        </div>
                        <div className='SuperCoin'>
                                <Link className='sideBarCart' to="/cart"><ShoppingCartIcon className='sideBarIcon' /></Link>
                                <Link className='sideBarCart' to='/cart'><p>My Cart</p> {cart.length>0 ? <p> ({cart.length}) </p>:""} </Link>
                        </div>
                        <div className='SuperCoin'>
                                <FavoriteIcon className='sideBarIcon' />
                                <p>My Whishlist</p>
                        </div>
                        <div className='SuperCoin'>
                                <PagesIcon className='sideBarIcon' />
                                <p>My Account</p>
                        </div>
                        <div className='SuperCoin'>
                            <NotificationsIcon className='sideBarIcon' />
                            <p>My Notifications</p>
                        </div>
                    </div>
                    <div className='SideBarBox3'>
                            <div className='SuperCoin'>
                                    <p>Notification Preferences</p>
                            </div>
                            <div className='SuperCoin'>
                                <p>Help Centre</p>
                            </div>
                            <div className='SuperCoin'>
                                <p>Legal</p>
                            </div>

                    </div>
                </div>
            </div>
            <button className='Open' onClick={handleClass}> <ListIcon /> </button>
        </>
    )
}
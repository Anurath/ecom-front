import sellerHero from '../assets/seller/sellerHeroImg.png'
import customer from '../assets/seller/customerImg.svg'
import lowCost from '../assets/seller/low-cost-icon-img.svg'
import support from '../assets/seller/seller-support-icon-img.svg'
import shoppingBag from '../assets/seller/shopping-bag-icon-img.svg'
import wallet from '../assets/seller/wallet-icon-img.svg'

import SellerNavBar from './SellerNavBar'
import './Becomeseller.css';
export default function BecomeSeller() {
    return (
        <div className="BecomeSeller">
            <SellerNavBar />
            <div className="image-container">
                <img id='sellerHeroImg' src={sellerHero} alt="Image Missing" />
                <div className='text-overlay'>Sell Online with Flipkart</div>
            </div>
            <div id='sellerFacilities'>
                <div className='sellerFacility'>
                    <img src={customer} alt="Image Missing" />
                    <p>45 crore+ Flipkart customers</p>
                </div>
                <div className='sellerFacility'>
                    <img src={wallet} alt="Image Missing" />
                    <p>7* days secure & regular payments</p>
                </div>
                <div className='sellerFacility'>
                    <img src={lowCost} alt="" />
                    <p>Low cost of doing business</p>
                </div>
                <div className='sellerFacility'>
                    <img src={support} alt="" />
                    <p>One click Seller Support</p>
                </div>
                <div className='sellerFacility'>
                    <img src={shoppingBag} alt="" />
                    <p>Access to The Big Billion Days & more</p>
                </div>
            </div>
        </div>
    )
}
import sellerHero from '../assets/seller/sellerHeroImg.png'
import customer from '../assets/seller/customerImg.svg'
import lowCost from '../assets/seller/low-cost-icon-img.svg'
import support from '../assets/seller/seller-support-icon-img.svg'
import shoppingBag from '../assets/seller/shopping-bag-icon-img.svg'
import wallet from '../assets/seller/wallet-icon-img.svg'
import success1 from '../assets/seller/success1.png'
import success2 from '../assets/seller/success2.png'

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
            <div className='sellerStories'> <span className='storyHead'>Seller Success</span> Stories </div>
            <div className="SuccessStories">
                <img id='successImg' src={success1} alt="" />
                <div className='succesInfo'>
                    <h3>Dinesh Kumar Rajpurohit,Kemei</h3>
                    On Flipkart, your listings are live in less than 2 hours and you can start selling anywhere in India. I started my business with 3 products, and today I own 3 brands and have also created employment opportunities for my family and team of 25.
                </div>
            </div>
            <div className="SuccessStories">
                <img id='successImg' src={success2} alt="" />
                <div className='succesInfo'>
                    <h3>Raju Lunawath,Amazestore</h3>
                    Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.                </div>
            </div>
        </div>
    )
}
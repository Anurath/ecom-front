import { Link } from 'react-router-dom'
import SellerSideBar from './sellerSideBar'
import sellerLogo from '../assets/seller/sellerLogo.svg'
import './SellerNavBar.css'
export default function SellerNavBar() {
    return (
        <div className="sellerNavbar">
            <div className='sellerFirstDiv'>
                <div><img src={sellerLogo} alt="" /></div>
                <Link className='sellerHome' to="/"><div className='NavHeader'>Home</div></Link>
                <div className='ItemElement'>
                    <p className='NavHeader'>Sell Online</p>
                    <div className='sellOnline'>
                        <p>Create Account</p>
                        <p>List Products</p>
                        <p>Storage & Shipping</p>
                        <p>Recieve Payments</p>
                        <p>Grow Faster</p>
                        <p>Seller App</p>
                    </div>
                </div>
                <div className='ItemElement1'>
                    <p className='NavHeader feeAndCom'>Fees and Commission</p>
                    <div className='Commission'>
                        <p>Payment Cycle</p>
                        <p>Fee Type</p>
                        <p>Calculate Gross Margin</p>
                    </div>
                </div>
                <div className='ItemElement2'>
                    <p className='NavHeader'>Grow</p>
                    <div className='Grow'>
                        <p>FAssured badge</p>
                        <p>Insights & Tools</p>
                        <p>Flipkart Ads</p>
                        <p>Shopping Festivals</p>
                        <p>Service Partners</p>
                    </div>
                </div>
                <div className='ItemElement3'>
                    <p className='NavHeader'>Learn</p>
                    <div className='Learn'>
                        <p>FAQs</p>
                        <p>Seller Blogs</p>
                    </div>
                </div>
                <div className='ShopsyMain'>
                    <p className='NavHeader Shopsy'>Shopsy</p>
                </div>
            </div>
            <div className='sellerSecondDiv'>
                <div className='sellerLogin'><button> <Link id='SellerLoginLink' to="/login" >Login</Link> </button></div>
                <div className='startSelling'><button>Start Selling</button></div>
            </div>
            <SellerSideBar />
        </div>
    )
}
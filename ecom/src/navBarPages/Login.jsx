
import Flipkart from '../assets/flipkart.png'
import './Login.css'
export default function Login() {

    return (
        <div className="Login">
            <div className="sideLogin">
                <div className='loginInfo'>
                    <h2>Login</h2>
                    <h4>Get access to your Orders, Wishlist and Recommendations</h4>
                </div>
                <img id='FlipkartImage' src={Flipkart} alt="Image Missing" />
            </div>
            <div className="userLogin">
                <form action="">
                    <input id='inp' type="text" placeholder="Enter Email/Mobile Number" />
                    <h5 className='terms'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</h5>
                    <button>Request OTP</button>
                </form>
                <a href="/"><h5 className='resister'>New to Flipkart? Create an account</h5></a>
            </div>
        </div>
    )
}
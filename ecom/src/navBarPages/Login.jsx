import './Login.css'
export default function Login(){
    return(
        <div className="Login">
            <div className="sideLogin">
                <h2>Login</h2>
                <h4>Get access to your Orders, Wishlist and Recommendations</h4>
            </div>
           <div className="userLogin">
            <form action="">
                <input id='inp' type="text" placeholder="Enter Email/Mobile Number" />
                <p className='terms'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                <button>Request OTP</button>
            </form>
            <a href="/"><p className='resister'>New to Flipkart? Create an account</p></a>
           </div>
        </div>
    )
}
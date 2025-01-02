import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to='/'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" /></Link>
            <div className="search">
                {/* <label htmlFor="search"><i class="fa-solid fa-magnifying-glass"></i></label> */}
                <input type="search" name="search" id='search' placeholder='Search for Products,Brand and More...' />
            </div>
            <div className="login">
                <AccountCircleIcon />
                
                <Link to='/login'><p>Login</p></Link>
            </div>
            <div className="cart">
                <ShoppingCartIcon />
                <Link to='/cart'><p>Cart</p></Link>
            </div>
            <div className="seller">
                <CardGiftcardIcon />
                <Link to='/becomeseller'><p>Become a Seller</p></Link>
            </div>

            <MoreVertIcon />

        </div> 
    )
}

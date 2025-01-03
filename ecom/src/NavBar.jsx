import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import SideBar from './navBarPages/SideBar';
import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div className="NavBar">
            <SideBar />
            <Link to='/'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" /></Link>
            <div className="search">
                {/* <label htmlFor="search"><i class="fa-solid fa-magnifying-glass"></i></label> */}
                <div id='search'>
                <SearchIcon id='SearchIcon' />
                <input type="search" name="search" id='searchField' placeholder='Search for Products,Brand and More...' />
                </div>
            </div>
            <div className="login">
                <AccountCircleIcon />
                
                <Link className='NavBarLink' to='/login'><p>Login</p></Link>
            </div>
            <div className="cart">
                <ShoppingCartIcon />
                <Link className='NavBarLink' to='/cart'><p>Cart</p></Link>
            </div>
            <div className="seller">
                <CardGiftcardIcon />
                <Link className='NavBarLink' to='/becomeseller'><p>Become a Seller</p></Link>
            </div>

            <MoreVertIcon className='moreVertIcon' />

        </div> 
    )
}

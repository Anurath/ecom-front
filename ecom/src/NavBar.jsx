import './NavBar.css'
export default function NavBar() {
    return (
        <div className="NavBar">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
            <div className="search">
                {/* <label htmlFor="search"><i class="fa-solid fa-magnifying-glass"></i></label> */}
                <input type="search" name="search" id='search' placeholder='Search for Products,Brand and More...' />
            </div>
            <div className="login">
                <i class="fa-regular fa-user"></i>
                <p>Login</p>
            </div>
            <div className="cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </div>
            <div className="seller">
                <i class="fa-solid fa-gift"></i>
                <p>Become a Seller</p>
            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>

        </div>
    )
}
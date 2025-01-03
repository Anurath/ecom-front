import ListIcon from '@mui/icons-material/List';
import Close from "@mui/icons-material/Close";
import sellerLogo from '../assets/seller/sellerLogo.svg'

import './SellerSideBar.css'
import { useState } from 'react';
export default function SellerSideBar() {
    let [sellerSiderbar, setSellerSidebar] = useState(false);
    let handleSellerSideBar = () => {
        setSellerSidebar(!sellerSiderbar);
    }
    return (
        <>
            <button className='sellerOpenSideBar' onClick={handleSellerSideBar}> <ListIcon /> </button>
            <div className={`SellerSideBar ${sellerSiderbar ? "VisibleSellerSideBar" : ""} `} >
                <div className="sellerSideBarItems">
                    <div className="logoItem">
                        <img src={sellerLogo} height={30} alt="" />
                        <button className='sellerCloseSideBar' onClick={handleSellerSideBar}> <Close /> </button>
                    </div>
                </div>
                <div className="sellerSideBarItems">
                    <p>Sell Online</p>
                </div>
                <div className="sellerSideBarItems">
                    <p>Fees and Commission</p>
                </div>
                <div className="sellerSideBarItems">
                    <p>Grow</p>
                </div>
                <div className="sellerSideBarItems">
                    <p>Learn</p>
                </div>
                <div className="sellerSideBarItems">
                    <p>Shopsy</p>
                </div>
            </div>
        </>
    )
}
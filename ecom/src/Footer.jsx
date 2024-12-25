import FooterComponant from './FooterComponant'
import Lowerfooter from './LowerFooter'
import './Footer.css'
export default function Footer({footerData}){
    return(
        <div className="Footer">
            <div className="UpperFooter">
            {
                footerData.map((singleFooterData)=>(
                    <FooterComponant footerItemHeader={singleFooterData.footerItemHeader} footerData={singleFooterData.footerItems}  />
                ))
            }
            </div>
            <Lowerfooter />
        </div>
    )
}
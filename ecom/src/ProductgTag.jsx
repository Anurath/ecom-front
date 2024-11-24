import Productg from "./Productg"
import './ProductgTab.css'
export default function ProductgTab() {
    let productTagline="Winter Essentials"
    let productInfo=[
        {
            name:"Product one"
        },
        {
            name:"Product two"
        },
        {
            name:"Product three"
        },
        {
            name:"Product four"
        }

    ]
    return (
        
            <div className="ProductgTab">
                <Productg productInfo={productInfo} productTagline={productTagline} />
            </div>
        
    )
}
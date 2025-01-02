
import './GroupProduct.css'
export default function GroupProduct({product}) {
    return (
        <div className="GroupProduct">
            <img id='groupImg' src={product.imgUrl} style={{ width: "99%" }}  alt="" />
            <div id='infoData'>
                <p> {product.name} </p>
                <p id='special' style={{ color: "green"}}> {product.tagline} </p>
            </div>
        </div>
    )
}
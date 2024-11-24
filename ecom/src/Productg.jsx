import './Productg.css'
export default function({productInfo,productTagline}){
    return(
        <>
        {
            productInfo.map((product)=>(
                <div className="Productg">
                        <h3> {product.name} </h3>
                </div>
            ))
        }
        <h1> {productTagline} </h1>
        </>
    )
}
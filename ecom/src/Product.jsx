import './Product.css'
export default function Product({ productInfo }) {
    return (
        <>
            {
                productInfo.map((product) => (
                    <div className="Product">
                        <img src={product.imgUrl} height={150} width={150} alt="" />
                        <div className="info">
                            <p> {product.name} </p>
                            <h4> {product.tagline} </h4>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
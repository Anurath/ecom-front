import Product from "./Product";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProductHead from "./ProductHead";

import './ProductTab.css'
export default function ProductTab({productInfo, tabName}){
    
    return(
        <div className="main">
            <div className="title">
                <ProductHead tabName={tabName} />
                <NavigateNextIcon className="NavigateNextIcon" />
            </div>
            <div className="ProductTab">
            <Product productInfo={productInfo} />
        </div>
        </div>
    )
}
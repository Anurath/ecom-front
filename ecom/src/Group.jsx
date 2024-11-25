import './Group.css'
import GroupProduct from "./GroupProduct"
export default function Group({products,GroupName}){
    return(
        <div className="Group">
            <h1> {GroupName} </h1>
            {
                products.map((product)=>(
                    <GroupProduct product={product} />
                ))
            }
        </div>
    )
}
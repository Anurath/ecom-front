import './Group.css'
import GroupProduct from "./GroupProduct"
export default function Group({products,GroupName}){
    return(
        <div className="Group">
            <p className='ParentPara'> {GroupName} </p>
            {
                products.map((product,index)=>(
                    <GroupProduct key={index} product={product} />
                ))
            }
        </div>
    )
} 
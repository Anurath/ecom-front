import './FooterComponant.css'
export default function FooterComponant({footerItemHeader,footerData}){
    console.log(footerData);
    return(
        <>
        <div className="footerItems">
        <p>{footerItemHeader}</p>
            {
                footerData.map((item)=>(
                    <li> {item} </li>
                ))
            }
        </div>
        </>
    )
}
import './FooterComponants.css';
export default function FooterComponant({footerItemHeader,footerData}){
    return(
        <>
        <div className="footerItems">
        <p>{footerItemHeader}</p>
            {
                footerData.map((item)=>(
                    <li key={item.id}> {item} </li>
                ))
            }
        </div>
        </>
    )
}
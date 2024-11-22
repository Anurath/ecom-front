import './HeroSmallCompCard.css'
export default function HeroSmallCompCard({imgCard,name}){
    return(
        <div className="HeroSmallCompCard">
            <img src={imgCard} height={70} width={70} alt="" />
            <p> {name} </p>
        </div>
    )
}
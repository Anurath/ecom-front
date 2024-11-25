import './GroupContainer.css'
import tshirt1 from './assets/groupImgs/tshirt1.png'
import tshirt2 from './assets/groupImgs/tshirt2.png'
import tshirt3 from './assets/groupImgs/tshirt3.png'
import tshirt4 from './assets/groupImgs/tshirt4.png'
import heroSaree from './assets/herosaree.png'
import gift from './assets/groupImgs/gift.png'
import gift1 from './assets/groupImgs/gift1.png'
import gift2 from './assets/groupImgs/gift2.png'
import gift4 from './assets/groupImgs/gift4.png'
import Group from "./Group"
export default function GroupContainer(){
    let products=[
        {
            imgUrl:tshirt1,
            name:"one",
            special:"50%off"
        },
        {
            imgUrl:tshirt2,
            name:"two",
            special:"80%off"
        },
        {
            imgUrl:tshirt3,
            name:"three",
            special:"30%off"
        },
        {
            imgUrl:tshirt4,
            name:"four",
            special:"10%off"
        }
    ]

    let products1=[
        {
            imgUrl:gift,
            name:"one",
            special:"50%off"
        },
        {
            imgUrl:gift1,
            name:"two",
            special:"80%off"
        },
        {
            imgUrl:gift2,
            name:"three",
            special:"30%off"
        },
        {
            imgUrl:gift4,
            name:"four",
            special:"10%off"
        }
    ]
    let GroupName=["Winter Essentials","Special Gifts"]
    return(
        <div className="GroupContainer">
            <Group products={products} GroupName={GroupName[0]} />
            <Group products={products1} GroupName={GroupName[1]} />
            <img id='herosaree' src={heroSaree} alt="" />
        </div>
    )
}
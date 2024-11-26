import './GroupContainer.css'
import tshirt1 from './assets/groupImgs/tshirt1.png'
import tshirt2 from './assets/groupImgs/tshirt2.png'
import tshirt3 from './assets/groupImgs/tshirt3.png'
import tshirt4 from './assets/groupImgs/tshirt4.png'

import hero from './assets/hero.png'

import gift from './assets/groupImgs/gift.png'
import gift1 from './assets/groupImgs/gift1.png'
import gift2 from './assets/groupImgs/gift2.png'
import gift4 from './assets/groupImgs/gift4.png'

import home from './assets/groupImgs/home.png'
import home1 from './assets/groupImgs/home1.png'
import home2 from './assets/groupImgs/home2.png'
import home3 from './assets/groupImgs/home3.png'

import sport from './assets/groupImgs/sport.png'
import sport1 from './assets/groupImgs/sport1.png'
import sport2 from './assets/groupImgs/sport2.png'
import sport3 from './assets/groupImgs/sport3.png'

import Group from "./Group"
export default function GroupContainer(){
    let products=[
        {
            imgUrl:tshirt1,
            name:"Casual Jacket",
            special:"50%off"
        },
        {
            imgUrl:tshirt2,
            name:"Sweater",
            special:"80%off"
        },
        {
            imgUrl:tshirt3,
            name:"Waterproof Jacker",
            special:"30%off"
        },
        {
            imgUrl:tshirt4,
            name:"Men's Mufflers",
            special:"10%off"
        }
    ]

    let products1=[
        {
            imgUrl:gift,
            name:"Table Lamps",
            special:"Min. 50% Off"
        },
        {
            imgUrl:gift1,
            name:"two",
            special:"Min. 50% Off"
        },
        {
            imgUrl:gift2,
            name:"three",
            special:"Min. 50% Off"
        },
        {
            imgUrl:gift4,
            name:"four",
            special:"Min. 50% Off"
        }

    ]
    let products2=[
        {
            imgUrl:home,
            name:"Bath towels",
            special:"Min. 50% Off"
        },
        {
            imgUrl:home1,
            name:"Blankets",
            special:"Min. 50% Off"
        },
        {
            imgUrl:home2,
            name:"Blankets",
            special:"Min. 40% Off"
        },
        {
            imgUrl:home3,
            name:"Bed",
            special:"Min. 50% Off"
        }

    ]

    let products3=[
        {
            imgUrl:sport,
            name:"Bath towels",
            special:"Min. 50% Off"
        },
        {
            imgUrl:sport1,
            name:"Blankets",
            special:"Min. 50% Off"
        },
        {
            imgUrl:sport2,
            name:"Blankets",
            special:"Min. 40% Off"
        },
        {
            imgUrl:sport3,
            name:"Bed",
            special:"Min. 50% Off"
        }

    ]
    let GroupName=["Winter Essentials","Special Gifts","Home Delights"]
    return(
        <div className="GroupContainer">
            <Group products={products} GroupName={GroupName[0]} />
            <Group products={products1} GroupName={GroupName[1]} />
            <Group products={products2} GroupName={GroupName[2]} />
            <Group products={products3} GroupName={GroupName[1]} />
            <img id='herosaree' src={hero} alt="" />
        </div>
    )
}

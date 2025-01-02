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
            tagline:"50%off",
            price:300
        },
        {
            imgUrl:tshirt2,
            name:"Sweater",
            tagline:"80%off",
            price:300
        },
        {
            imgUrl:tshirt3,
            name:"Waterproof Jacker",
            tagline:"30%off",
            price:300
        },
        {
            imgUrl:tshirt4,
            name:"Men's Mufflers",
            tagline:"10%off",
            price:300
        }
    ]

    let products1=[
        {
            imgUrl:gift,
            name:"Table Lamps",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:gift1,
            name:"two",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:gift2,
            name:"three",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:gift4,
            name:"four",
            tagline:"Min. 50% Off",
            price:300
        }

    ]
    let products2=[
        {
            imgUrl:home,
            name:"Bath towels",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:home1,
            name:"Blankets",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:home2,
            name:"Blankets",
            tagline:"Min. 40% Off",
            price:300
        },
        {
            imgUrl:home3,
            name:"Bed",
            tagline:"Min. 50% Off",
            price:300
        }

    ]

    let products3=[
        {
            imgUrl:sport,
            name:"Bath towels",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:sport1,
            name:"Blankets",
            tagline:"Min. 50% Off",
            price:300
        },
        {
            imgUrl:sport2,
            name:"Blankets",
            tagline:"Min. 40% Off",
            price:300
        },
        {
            imgUrl:sport3,
            name:"Bed",
            tagline:"Min. 50% Off",
            price:300
        }

    ]
    let GroupName=["Winter Essentials","tagline Gifts","Home Delights","Fitness Deal"]
    return(
        <div className="GroupContainer">
            <Group products={products} GroupName={GroupName[0]} />
            <Group products={products1} GroupName={GroupName[1]} />
            <Group products={products2} GroupName={GroupName[2]} />
            <Group products={products3} GroupName={GroupName[3]} />
            <img id='herosaree' src={hero} alt="" />
        </div>
    )
}

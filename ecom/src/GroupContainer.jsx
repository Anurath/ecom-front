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
            tagline:50,
            price:499
        },
        {
            imgUrl:tshirt2,
            name:"Sweater",
            tagline:80,
            price:1200
        },
        {
            imgUrl:tshirt3,
            name:"Waterproof Jacker",
            tagline:30,
            price:701
        },
        {
            imgUrl:tshirt4,
            name:"Men's Mufflers",
            tagline:10,
            price:599
        }
    ]

    let products1=[
        {
            imgUrl:gift,
            name:"Table Lamps",
            tagline:20,
            price:500
        },
        {
            imgUrl:gift1,
            name:"two",
            tagline:50,
            price:408
        },
        {
            imgUrl:gift2,
            name:"three",
            tagline:50,
            price:699
        },
        {
            imgUrl:gift4,
            name:"four",
            tagline:40,
            price:259
        }

    ]
    let products2=[
        {
            imgUrl:home,
            name:"Bath towels",
            tagline:21,
            price:536
        },
        {
            imgUrl:home1,
            name:"Blankets",
            tagline:15,
            price:842
        },
        {
            imgUrl:home2,
            name:"Blankets",
            tagline:34,
            price:485
        },
        {
            imgUrl:home3,
            name:"Bed",
            tagline:54,
            price:376
        }

    ]

    let products3=[
        {
            imgUrl:sport,
            name:"Bath towels",
            tagline:52,
            price:539
        },
        {
            imgUrl:sport1,
            name:"Blankets",
            tagline:7,
            price:453
        },
        {
            imgUrl:sport2,
            name:"Blankets",
            tagline:25,
            price:370
        },
        {
            imgUrl:sport3,
            name:"Bed",
            tagline:47,
            price:1205
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

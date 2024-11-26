import NavBar from "./NavBar"
import ImageSlider from "./ImageSlider"
import HeroSmallComp from "./HeroSmallComp"
import ProductTab from "./ProductTab"
import GroupContainer from "./GroupContainer"
import coffee from './assets/ProductImgs/coffee.jpg'
import dryFruit from './assets/ProductImgs/dryFruit.png'
import stationary from './assets/ProductImgs/stationary.jpg'
import toy from './assets/ProductImgs/toy.jpg'
import fashion from './assets/ProductImgs/fashion.jpg'

import style from './assets/style/style.png';
import style3 from './assets/style/style3.png';
import style4 from './assets/style/style4.png';
import style5 from './assets/style/style5.png';
import style6 from './assets/style/style6.png';
import style7 from './assets/style/style7.png';


function App() {

  let productInfo=[
    {
        imgUrl:toy,
        name:"Soft Toys",
        tagline:"Upto 70% Off"
    },
    {
        imgUrl:dryFruit,
        name:"Dry fruits",
        tagline:"Upto 75% Off"
    },
    {
        imgUrl:coffee,
        name:"Coffee Power",
        tagline:"Upto 70% Off"
    },
    {
        imgUrl:stationary,
        name:"Top Selling",
        tagline:"From Rs.49"
    },
    {
        imgUrl:fashion,
        name:"New Fashion",
        tagline:"From Rs.399"
    }
]

let productInfo1=[
  {
      imgUrl:style6,
      name:"Saree",
      tagline:"Upto 60% Off"
  },
  {
      imgUrl:style7,
      name:"Saree",
      tagline:"Upto Rs.300 Off"
  },
  {
      imgUrl:style3,
      name:"Flared Kurta",
      tagline:"Upto 70% Off"
  },
  {
      imgUrl:style4,
      name:"Gown Kurta",
      tagline:"Upto 73% OFF"
  },
  {
      imgUrl:style5,
      name:"Straight Kurta ",
      tagline:"From Rs.399"
  }
]
let tabName=["Best of Best","Top Deals"]
  return (
    <>
      <NavBar />
      <HeroSmallComp />
      <ImageSlider />
      <ProductTab productInfo={productInfo} tabName={tabName[0]} />
      <GroupContainer/>
      <ProductTab productInfo={productInfo1} tabName={tabName[1]} />
    </>
  )
}

export default App

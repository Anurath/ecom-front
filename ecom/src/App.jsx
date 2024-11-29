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
import Footer from "./Footer"

import style from './assets/style/style.png';
import style3 from './assets/style/style3.png';
import style4 from './assets/style/style4.png';
import style5 from './assets/style/style5.png';
import style6 from './assets/style/style6.png';
import style7 from './assets/style/style7.png';

import shoes from './assets/style/shoes.png';
import shoes1 from './assets/style/shoes1.png';
import shoes2 from './assets/style/shoes2.png';
import shoes3 from './assets/style/shoes3.png';
import shoes4 from './assets/style/shoes4.png';
import shoes5 from './assets/style/shoes5.png';

import air from './assets/style/air.png';
import air1 from './assets/style/air1.png';
import air2 from './assets/style/air2.png';
import air3 from './assets/style/air3.png';
import air4 from './assets/style/air4.png';


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
      tagline:"Upto 20% Off"
  },
  {
      imgUrl:style7,
      name:"Saree",
      tagline:"Upto Rs.900 Off"
  },
  {
      imgUrl:style3,
      name:"Flared Kurta",
      tagline:"Upto 7% Off"
  },
  {
      imgUrl:style4,
      name:"Gown Kurta",
      tagline:"Upto 13% OFF"
  },
  {
      imgUrl:style5,
      name:"Straight Kurta ",
      tagline:"From Rs.999"
  }
]

let productInfo2=[
    {
        imgUrl:shoes,
        name:"Bata",
        tagline:"Upto 20% Off"
    },
    {
        imgUrl:shoes1,
        name:"Killer",
        tagline:"Upto Rs.400 Off"
    },
    {
        imgUrl:shoes2,
        name:"Height",
        tagline:"Upto 7% Off"
    },
    {
        imgUrl:shoes3,
        name:"Bata",
        tagline:"Upto 10% OFF"
    },
    {
        imgUrl:shoes4,
        name:"Lopher",
        tagline:"From Rs.999"
    }
  ]

  let productInfo3=[
    {
        imgUrl:air,
        name:"Trigger",
        tagline:"Upto 10% Off"
    },
    {
        imgUrl:air1,
        name:"realme Buds",
        tagline:"Upto Rs.400 Off"
    },
    {
        imgUrl:air2,
        name:"Brolan",
        tagline:"Upto77% Off"
    },
    {
        imgUrl:air3,
        name:"Noise Buds",
        tagline:"Upto 10% OFF"
    },
    {
        imgUrl:air4,
        name:"Trigger",
        tagline:"From Rs.999"
    }
  ]
let tabName=["Best of Best","Top Deals","Best of Shoes","Special Deals"]
  return (
    <>
      <NavBar />
      <HeroSmallComp />
      <ImageSlider />
      <ProductTab productInfo={productInfo} tabName={tabName[0]} />
      <GroupContainer/>
      <ProductTab productInfo={productInfo1} tabName={tabName[1]} />
      <ProductTab productInfo={productInfo2} tabName={tabName[2]} />
      <ProductTab productInfo={productInfo3} tabName={tabName[3]} />
      <Footer />
    </>
  )
}

export default App

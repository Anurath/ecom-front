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

  return (
    <>
      <NavBar />
      <HeroSmallComp />
      <ImageSlider />
      <ProductTab productInfo={productInfo} />
      <GroupContainer/>
      <ProductTab productInfo={productInfo} />
    </>
  )
}

export default App

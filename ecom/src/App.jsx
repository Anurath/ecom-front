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

    let productInfo = [
        {
            imgUrl: toy,
            name: "Soft Toys",
            tagline: "Upto 70% Off",
            price:300
        },
        {
            imgUrl: dryFruit,
            name: "Dry fruits",
            tagline: "Upto 75% Off",
            price:300
        },
        {
            imgUrl: coffee,
            name: "Coffee Power",
            tagline: "Upto 70% Off",
            price:300
        },
        {
            imgUrl: stationary,
            name: "Top Selling",
            tagline: "From Rs.49",
            price:300
        },
        {
            imgUrl: fashion,
            name: "New Fashion",
            tagline: "From Rs.399",
            price:300
        }
    ]

    let productInfo1 = [
        {
            imgUrl: style6,
            name: "Saree",
            tagline: "Upto 20% Off",
            price:300
        },
        {
            imgUrl: style7,
            name: "Saree",
            tagline: "Upto Rs.900 Off",
            price:300
        },
        {
            imgUrl: style3,
            name: "Flared Kurta",
            tagline: "Upto 7% Off",
            price:300
        },
        {
            imgUrl: style4,
            name: "Gown Kurta",
            tagline: "Upto 13% OFF",
            price:300
        },
        {
            imgUrl: style5,
            name: "Straight Kurta ",
            tagline: "From Rs.999",
            price:300
        }
    ]

    let productInfo2 = [
        {
            imgUrl: shoes,
            name: "Bata",
            tagline: "Upto 20% Off",
            price:300
        },
        {
            imgUrl: shoes1,
            name: "Killer",
            tagline: "Upto Rs.400 Off",
            price:300
        },
        {
            imgUrl: shoes2,
            name: "Height",
            tagline: "Upto 7% Off",
            price:300
        },
        {
            imgUrl: shoes3,
            name: "Bata",
            tagline: "Upto 10% OFF",
            price:300
        },
        {
            imgUrl: shoes4,
            name: "Lopher",
            tagline: "From Rs.999",
            price:300
        }
    ]

    let productInfo3 = [
        {
            imgUrl: air,
            name: "Trigger",
            tagline: "Upto 10% Off",
            price:300
        },
        {
            imgUrl: air1,
            name: "realme Buds",
            tagline: "Upto Rs.400 Off",
            price:300
        },
        {
            imgUrl: air2,
            name: "Brolan",
            tagline: "Upto77% Off",
            price:300
        },
        {
            imgUrl: air3,
            name: "Noise Buds",
            tagline: "Upto 10% OFF",
            price:300
        },
        {
            imgUrl: air4,
            name: "Trigger",
            tagline: "From Rs.999",
            price:300
        }
    ]

    let footerData = [
        {
            footerItemHeader: "ABOUT",
            footerItems: ["About", "Careers", "Contact Us", "Flipkart Stories", "Press", "Corporate"],
            price:300
        },
        {
            footerItemHeader: "GROUP COMPANIES",
            footerItems: ["Myntra", "ClearTrip", "Shopsy"],
            price:300
        },
        {
            footerItemHeader: "HELP",
            footerItems: ["Payments", "shippings", "Cancellation"],
            price:300
        },
        {
            footerItemHeader: "CUSTOMER POLICY",
            footerItems: ["Security", "Privacy", "Sitemap", "Redressal", "EPR Compliance"],
            price:300
        },
        {
            footerItemHeader: "Mail Us:",
            footerItems: ["Flipkart Internet Private Limited,", "Buildings Alyssa, Begonia &", "Clove Embassy Tech Village,", "Outer Ring Road, Devarabeesanahalli Village,", "EPR  Bengaluru, 560103,", "Karnataka, India"],
            price:300
        },
        {
            footerItemHeader: " Registered Office Address:",
            footerItems: ["Flipkart Internet Private Limited,", " Buildings Alyssa, Begonia &", "Clove Embassy Tech Village, ", "Outer Ring Road, Devarabeesanahalli Village,", "Karnataka, India", "CIN : U51109KA2012PTC066107"," Telephone: 044-45614700/044-67415800"],
            price:300
        },


    ]

    let tabName = ["Best of Best", "Top Deals", "Best of Shoes", "Special Deals"]
    return (
        <>
            <NavBar />
            <HeroSmallComp />
            <ImageSlider />
            <ProductTab productInfo={productInfo} tabName={tabName[0]} />
            <GroupContainer />
            <ProductTab productInfo={productInfo1} tabName={tabName[1]} />
            <ProductTab productInfo={productInfo2} tabName={tabName[2]} />
            <ProductTab productInfo={productInfo3} tabName={tabName[3]} />
            <Footer footerData={footerData} />
        </>
    )
}

export default App

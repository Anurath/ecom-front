import handleButtonClick from './ImageSlider'
import './ImageSlider.css'
export default function ImageSlider(){
    return(
        <div className="ImageSlider">
            <button onClick={handleButtonClick} value={1} >Click me</button>
            <button onClick={handleButtonClick}  value={-1} >Click me</button>
        </div>
    )
}
import './LowerFooter.css'
import ComputerIcon from '@mui/icons-material/Computer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import CopyrightIcon from '@mui/icons-material/Copyright';
import StarIcon from '@mui/icons-material/Star';
export default function Lowerfooter(){
    return(
        <div className="LowerFooter">
            <div> <ComputerIcon fontSize="small" style={{ color: 'yellow' }}/> Become a Seller </div>
            <div> <CardGiftcardIcon fontSize="small" style={{ color: 'yellow' }}/> Gift Cards </div>
            <div> <StarIcon fontSize="small" style={{ color: 'yellow' }}/> Advertise </div>
            <div> <HelpIcon fontSize="small" style={{ color: 'yellow' }}/> Help Center </div>
            <div> <CopyrightIcon fontSize="small" style={{ color: 'yellow' }}/> 2007-2024 flipkart.com </div>
            <div>Made with ❤️ in Pune.</div>
        </div>
    )
}
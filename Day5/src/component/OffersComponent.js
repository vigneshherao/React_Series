import SubOfferCard from "./SubOfferCard";
import { Offer } from "../utils/constants";


const OffersComponent = () =>{
    return (
        <div className="offers">
            {
                Offer.map((offer)=>{
                    return  <SubOfferCard offerImage={offer.img} key={offer.id}/>
                })
            }
        </div>
    )
}


export default OffersComponent;
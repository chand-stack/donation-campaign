import { useEffect, useState } from "react";
import DonationDetail from "../DonationDetail/DonationDetail";


const Donation = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const cardsFromLs = JSON.parse(localStorage.getItem('cards')); 
        // console.log(...cardsFromLs);
        // const newCards = [...cards,...cardsFromLs]
        setCards(cardsFromLs)
    },[])
    // console.log(cards.length);
    return (
        <div>
            {
             cards.map(card => <DonationDetail key={card.id} card={card}/>)
            }
        </div>
    );
};

export default Donation;
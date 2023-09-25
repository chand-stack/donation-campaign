import { useEffect, useState } from "react";
import DonationDetail from "../DonationDetail/DonationDetail";


const Donation = () => {
    const [cards, setCards] = useState([]);
    

    useEffect(() => {
        const cardsFromLs = JSON.parse(localStorage.getItem('cards')); 
        setCards(cardsFromLs)
    },[])
   
    return (
        <>
        <div className="grid lg:grid-cols-2 items-center gap-4 md:px-5 lg:px-10">
            {
             cards.map((card,idx) => <DonationDetail key={idx} card={card}/>)
            }
        </div>
        <div className="flex justify-center my-9">
            <button className="btn bg-green-700 text-white hover:bg-blue-700">See All</button>
        </div>

        </>
    );
};

export default Donation;
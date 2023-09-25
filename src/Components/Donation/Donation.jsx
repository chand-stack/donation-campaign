import { useEffect, useState } from "react";
import DonationDetail from "../DonationDetail/DonationDetail";


const Donation = () => {
    const [cards, setCards] = useState([]);
    const [count,setCount] = useState(4)
    

    useEffect(() => {
        const cardsFromLs = JSON.parse(localStorage.getItem('cards')); 
        setCards(cardsFromLs)
    },[])
   
    return (
        <>
        <div className="grid lg:grid-cols-2 items-center gap-4 md:px-5 lg:px-10">
            {
             cards?.slice(0,count)?.map((card,idx) => <DonationDetail key={idx} card={card}/>)
            }
        </div>
        <div className="flex justify-center my-9">
        <div className={`${cards?.length > 4? 'contents' : 'hidden'}`}>
            <button onClick={() => setCount(15)} className={`btn bg-green-700 text-white hover:bg-blue-700 ${count>4 ? 'hidden': ''}`}>See All</button>
        </div>
        </div>

        </>
    );
};

export default Donation;
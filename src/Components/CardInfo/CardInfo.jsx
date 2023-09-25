import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

const CardInfo = () => {
  const [card, setCard] = useState({});
  const cards = useLoaderData();
  const cardId = useParams();
  const cardIdInt = parseInt(cardId.id);

  useEffect(() => {
    const cardInfo = cards?.find((card) => card.id === cardIdInt);
    setCard(cardInfo);
  }, [cards, cardIdInt]);

  return (
    <div className="container mx-auto my-20">
      {<CardDetail card={card}></CardDetail>}
    </div>
  );
};

export default CardInfo;

import PropTypes from 'prop-types';
import swal from 'sweetalert';
const CardDetail = ({card}) => {

    const infoHandler = () => {
        const lsArray = [];
        lsArray.push(card);
        localStorage.setItem('cards',JSON.stringify(lsArray))
        swal("Great!", "Donated Successfully!", "success");
    }
    // console.log(card);
   const {img,amount,color,headline,description} = card;
    return (
        <div className="space-y-9">
        <div className="mx-auto">
            <img className="w-9/12 md:h-[90vh] mx-auto" src={img} alt="" />
            <h1 className="bg-black bg-opacity-30 relative -mt-[75px] py-3 w-9/12  mx-auto"> <button onClick={infoHandler} className="text-white font-semibold text-xl py-3 px-5 rounded-md mx-3" style={{backgroundColor:`${color}`}}>Donate ${amount}</button> </h1>
        </div>
<h1 className="text-4xl font-bold w-9/12  mx-auto">{headline}</h1>
<p className="w-9/12  mx-auto">{description}</p>
</div>
    );
};

CardDetail.propTypes = {
    card: PropTypes.object.isRequired
  };

export default CardDetail;
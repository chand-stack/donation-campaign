import PropTypes from 'prop-types';

const DonationDetail = ({card}) => {
    console.log(card);
    const {tag,headline,img,bg_color,color,text_bg,amount} = card;
    return (
        <div style={{backgroundColor:`${bg_color}`}} className="w-80 h-52 md:w-fit mx-auto rounded-xl md:flex">
            <img className="rounded-xl w-full h-full mx-auto" src={img} alt="" />
            
            <div>
            <h1 style={{color:`${color}`,padding:'4px 8px',backgroundColor:`${text_bg}`,display:'inline-block',margin:'8px',borderRadius:'8px'}}>{tag}</h1>
            
            <h1 style={{color:'black',padding:'4px 8px'}} className="text-xl font-semibold">{headline}</h1>
            <p className="text-base font-semibold" style={{color:`${color}`,margin:'8px'}}>${amount}</p>
            <button className="text-white py-2 px-4 font-semibold" style={{backgroundColor:`${color}`,margin:'8px'}}>View Details</button>
            </div>
        </div>
    );
};

DonationDetail.propTypes = {
    card: PropTypes.object.isRequired
  };

export default DonationDetail;
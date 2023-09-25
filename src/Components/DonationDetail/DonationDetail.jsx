import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationDetail = ({card}) => {
    const {tag,headline,img,bg_color,color,text_bg,amount,id} = card;
    return (
        <div className="w-80 h-fit md:w-full mx-auto md:mx-0 rounded-xl md:flex gap-0">
            <img className="rounded-xl rounded-r-none w-80 h-52 mx-auto md:mx-0" src={img} alt="" />
            
            <div style={{backgroundColor:`${bg_color}`}} className='flex-grow rounded-r-lg'>
            <h1 style={{color:`${color}`,padding:'4px 8px',backgroundColor:`${text_bg}`,display:'inline-block',margin:'8px',borderRadius:'8px'}}>{tag}</h1>
            
            <h1 style={{color:'black',padding:'4px 8px'}} className="text-xl font-semibold">{headline}</h1>
            <p className="text-base font-semibold" style={{color:`${color}`,margin:'8px'}}>${amount}</p>
            <Link to={`/info/${id}`}><button className="text-white py-2 px-4 font-semibold" style={{backgroundColor:`${color}`,margin:'8px'}}>View Details</button></Link>
            </div>
        </div>
    );
};

DonationDetail.propTypes = {
    card: PropTypes.object.isRequired
  };

export default DonationDetail;
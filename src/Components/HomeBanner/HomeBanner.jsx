import { useState } from 'react';
import banner from '../../assets/Clothing.png'

import PropTypes from 'prop-types'; 

const HomeBanner = ({searchHandler}) => {
   const [inputText, setInputText]= useState('')

   const handleChange = e => {
    setInputText(e.target.value);
  };
  // console.log(inputText);


    return (
        <div className=''>
            <div style={{'--image-url': `url(${banner})`}} className="hero h-[80vh] bg-[image:var(--image-url)]" >
  <div className="hero-overlay bg-white bg-opacity-95"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="min-w-fit">
      <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
      <div className="mb-5 flex items-center justify-center">
        
        <input type="text" value={inputText} onChange={handleChange} placeholder="Search here..." className="input input-bordered w-full max-w-xs rounded-r-none text-black" />
        
        <button onClick={()=>searchHandler(inputText)} className="btn btn-primary bg-[#FF444A] text-white border-none rounded-l-none">Search</button></div>
      
    </div>
  </div>
</div>
        </div>
    );
};

HomeBanner.propTypes = {
  searchHandler: PropTypes.func
}

export default HomeBanner;
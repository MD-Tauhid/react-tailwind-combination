import React from 'react';
import Feature from '../Feature/Feature';


const PricingOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-300 p-3 rounded-lg my-6'>
            <div>
                <h1>
                    <span className='text-6xl font-bold text-green-600'>{option.price}</span>
                    <span className='text-4xl text-yellow-600'>/mon</span>
                </h1>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            <div className='px-6'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button className='bg-green-600 w-full py-2 rounded-lg mt-6 text-lg font-semibold text-white hover:bg-yellow-600'>Buy Now</button>
        </div>
    );
};

export default PricingOption;
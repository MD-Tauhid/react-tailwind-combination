import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, price: 0, name: 'Free', features: [
            'Awesome feature',
            'Darun feature',
            'Beautiful feature',
            'Unnecessery feature',
            'Will never use feature',
            'Ajaira feature',
            'Hudai feature',
        ]},
        {id: 2, price: 9.99, name: 'Medium', features: [
            'Awesome feature',
            'Darun feature',
            'Beautiful feature',
            'Unnecessery feature',
            'Will never use feature',
            'Ajaira feature',
            'Hudai feature',
        ]},
        {id: 3, price: 19.99, name: 'Premium', features: [
            'Awesome feature',
            'Darun feature',
            'Beautiful feature',
            'Unnecessery feature',
            'Will never use feature',
            'Ajaira feature',
            'Hudai feature',
        ]}
    ]
    return (
        <div className='bg-slate-200'>
            <h1 className='text-5xl'>Best Deals</h1>
            <div className='grid md:grid-cols-3 gap-3 m-4'>
                {
                    pricingOptions.map(option => <PricingOption option = {option} key={option.id}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;
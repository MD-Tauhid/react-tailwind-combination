import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                console.log(phoneData);
                setPhones(phoneData);
            })
    }, [])
    return (
        <div className='m-10'>
            <BarChart 
            width={1000} 
            height={400} 
            data={phones} 
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis padding={{ left: 10, right: 10 }} />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="price" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
};

export default Phones;
import React, { useEffect, useState } from 'react';
import { Customer } from '../types/customer';
import img from '../assets/noCust.avif'
import HashLoader from 'react-spinners/HashLoader';

interface CustomerDetailsProps {
    customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    const [photos, setPhotos] = useState<string[]>([]);

    const fetchPhotos = async () => {
        try {
            const newPhotos: string[] = [];
            for (let i = 0; i < 9; i++) {
                const response = await fetch('https://random.imagecdn.app/200/200');
                newPhotos.push(response.url);
            }
            setPhotos(newPhotos);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        if (customer) {
             setPhotos([])
            fetchPhotos();
            const interval = setInterval(() => {
                fetchPhotos();
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [customer]);

    if (!customer) {
        return (

            <div className='noSelection'>
                <h2>Please select a customer to view details.</h2>
                <div>
                    <img src={img} alt='No Customer Selected' />
                </div>
            </div>
        )
    }

    return (
        <div className="customer-details">            
            <h3>{customer.title}</h3>
            <h4>{customer.name}</h4>
            <p>{customer.address}</p>
            <div>
                <p>{customer.details}</p>
            </div>
            {photos.length == 0 && <div className='alignCenter'>
                <HashLoader
                    color="#191919"
                    size={50}
                />
                <span>Loading Images....</span>
            </div>}
            {photos.length > 0 && <div className="photo-grid">
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Photo ${index}`} />
                ))}
            </div>}
        </div>
    );
};

export default CustomerDetails;

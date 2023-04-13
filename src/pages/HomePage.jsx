import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async() => {
        const response = await fetch('https://exam.avavion.ru/api/services');
        
        const data = await response.json();

        setServices(data.data);
    }

    useEffect(() => {
        fetchServices();
    }, []);


    return (
        <div>
            <div className="services">
                {
                    services.map((service) => {
                        return (
                            <div key={service.id}>
                                <img src={service.image_url} alt="" />
                                <h2>{service.name}</h2>
                                <p>{service.content}</p>
            
                                <NavLink to={`/services/${service.id}`} >Перейти</NavLink>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default HomePage
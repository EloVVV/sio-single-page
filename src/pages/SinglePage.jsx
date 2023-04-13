import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const SinglePage = () => {

    const params = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://exam.avavion.ru/api/services/${params.id}`)
        .then((response) => response.json())
        .then((data) => setService(data.data));
    }, []);

    return (
        <div>
            <div key={service.id}>
                <img src={service.image_url} alt="" />
                <h2>{service.name}</h2>
                <p>{service.content}</p>

                <NavLink to={`/`} >Назад</NavLink>
            </div>
        </div>
    );
}

export default SinglePage
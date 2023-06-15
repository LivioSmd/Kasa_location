import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './StarsRate.css';

const StarsRate = ({rate}) => {

    useEffect(() => {
        let stars = Array.prototype.slice.call(document.querySelectorAll('.stars'));

        for (let i = 0; i < rate; i++) {
            stars[i].classList.remove("gray-star");
            stars[i].classList.add("red-star");
        }
    }, [rate])

    return (
        <div className='div-stars'>
            <FontAwesomeIcon icon={faStar} className="stars gray-star" />
            <FontAwesomeIcon icon={faStar} className="stars gray-star" />
            <FontAwesomeIcon icon={faStar} className="stars gray-star" />
            <FontAwesomeIcon icon={faStar} className="stars gray-star" />
            <FontAwesomeIcon icon={faStar} className="stars gray-star" />
        </div>
    );
};

export default StarsRate;

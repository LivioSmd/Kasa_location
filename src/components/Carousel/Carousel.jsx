import { useState } from 'react';
import './Carousel.css';

function Carousel ({ pictures }) {
    const [arrayIndex, setArrayIndex] = useState(0)
    const [index, setIndex] = useState(1)

    const next = () => {
        if (index === pictures.length) {
            setArrayIndex( 0);
            setIndex( 1)
        } else {
            setArrayIndex(arrayIndex => arrayIndex + 1)
            setIndex( index => index + 1)
        }
    }

    const previous = () => {
        if (index === 1) {
            setArrayIndex(pictures.length-1);
            setIndex(pictures.length)
        } else {
            setArrayIndex(arrayIndex => arrayIndex - 1)
            setIndex( index => index - 1)
        }
    }

    return <div className='div-Carousel'>
        <img className='img-Carousel' src={pictures[arrayIndex]} alt="Appartement"/>
        {pictures.length > 1 &&
            <>
                <span onClick={() => previous()} className='leftArrow'>
                    <i className="fa-solid fa-chevron-left"></i>
                </span>
                <span onClick={() => next()} className='rightArrow'>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
                <p className='number'>{index + '/' + pictures.length}</p>
            </>
        }
    </div>
}

export default Carousel;
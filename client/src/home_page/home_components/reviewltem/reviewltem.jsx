/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const reviewltem= ({testiMonialDetail}) => {
    const {name, address, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} />
                {/* <p>{description}</p> */}
            </div>
            <div className="testimonial-name">
                <p>{name}</p>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default reviewltem
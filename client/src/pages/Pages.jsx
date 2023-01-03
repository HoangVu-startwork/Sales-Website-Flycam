import React from 'react';
import Home from ".././components/mainpage/Home"
import FlashDeals from '../components/flashDeals/FlashDeals';
import BigTitle from '../components/collections/HomeBigTitle'


const Pages = ({productItems, addToCart, daTa,}) => {
    return (
        <>
            <Home cartItem={daTa}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}/>
            {/* <TopCate /> */}
            <BigTitle/>
            
        </>
    )
}

export default Pages
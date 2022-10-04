import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home(){
    const url=`https://632f13f5b56bd6ac45aa6c35.mockapi.io/ap/v1/product?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>
            Error reported. Please try
        </p>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content = 
        products.data.map((product) =>
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return(
        <div>
            <h1 className='font-bold text-2xl mb-3'>
                Best Sellers
            </h1>

            {content}

        </div>
    )
}

export default Home
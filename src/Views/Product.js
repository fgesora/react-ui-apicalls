import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const { id } = useParams()
    const url=`https://632f13f5b56bd6ac45aa6c35.mockapi.io/ap/v1/product/${id}`
    let product = useAxiosGet(url)
    let content = null 

    if(product.error){
        content = <p>
            Error reported. Please try
        </p>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content = 
        <div>
            <h1 className='text=2xl font-bold mb-3'>
                { product.data.name }
            </h1>
            <div>
                <img
                    src={product.data.images}
                    alt={product.data.name}
                />
            </div>
            <div className='font-bold text-xl mb-3'>
                $ { product.data.price }
            </div>
            <div>
                { product.data.description }
            </div>

        </div>
    }

    return(
        <div>
            { content }
        </div>
    )
}

export default Product
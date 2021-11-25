import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const {id }= useParams();
    
    return (
        <div>
            {id}
        </div>
    )
}

export default ProductDetails

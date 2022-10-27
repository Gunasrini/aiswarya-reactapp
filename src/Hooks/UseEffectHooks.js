import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';

export default function UseEffectHooks() {
    const url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
                setLoading(false)
            });
    }, [])
    return (
        <div className='col-md-12 text-start border p-3 px-4 mb-4'>
            <h3 className='mb-4 text-decoration-underline'>useEffect Hook:</h3>
            <ul className='products'>
                {
                    loading ? <Loader /> : products.map((p) => {
                        return (
                            <li key={p.id}>{p.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

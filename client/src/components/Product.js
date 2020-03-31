import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {navigate, Link} from "@reach/router"

import Create from "./Create"


const Product = props => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProducts(res.data)})
            .catch(err => console.log(err));
    },[]);

    const View = _id => {
        navigate(`/product/${_id}`)
    }

    return (
    <>
   
            <Link to ="/">Home</Link>
        <div>

        
        <h4>Create a Product</h4>
        <Create />
        
        <h4>All Products</h4>
        <p></p>
        {
            products.map(product => 
                <ul className= "list-group">
                    <li className = "list-group-item">
                            <button onClick = {e => View(product._id) } >{product.title}</button>
                    </li>
                </ul>
            )
        }
        </div>
    </>
    )}

export default Product;

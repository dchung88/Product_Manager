import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const ViewProduct = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, []);

    const Edit = _id => {
        navigate(`/product/edit/${props._id}`)
    }

    const Delete = _id => {
        axios.delete(`http://localhost:8000/api/product/${props._id}`)
        navigate("/")
    }

    return (
        <div>
            <Link to ="/" >Home</Link>
            <h3>Title: {title}</h3>
            <h3>Price($): {price}</h3>
            <h3>Description: {description}</h3>
            <button onClick = {e => Edit(props._id)}>Edit</button>
            <button onClick = {e => Delete(props._id)}>Delete</button>
        </div>
    )
}

export default ViewProduct;

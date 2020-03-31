import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate, Link} from '@reach/router';

const Edit = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        Axios.get(`http://localhost:8000/api/product/${props._id}`)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    },[]
    );

    const editProduct =e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/product/edit/${props._id}`, {
            _id: props._id, title, price, description
        })
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate(`/product/${props._id}`);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
        <form onSubmit = { editProduct }>
            <div>
                <input placeholder = {title} onChange = {e => setTitle(e.target.value)}/>
                {
                    errors.title ?
                <p>{errors.title.message}</p> : ""
                }
                <input placeholder = {price} onChange = {e => setPrice(e.target.value)}/>
                {
                    errors.price ?
                <p>{errors.price.message}</p> : ""
                }
                <input placeholder = {description} onChange = {e => setDescription(e.target.value)}/>
                {
                    errors.description ?
                <p>{errors.description.message}</p> : ""
                }
            </div>
            <input type ="submit" value="Edit" />
        </form>
        </>
    )
}

export default Edit;


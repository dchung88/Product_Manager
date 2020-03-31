import React, {useState} from 'react';
import Axios from 'axios';

const Create = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const createProduct =e => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/product", {title, price, description})
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    window.location.reload(false);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit = { createProduct }>
            <div>
                <input placeholder = "Product Name" onChange = {e => setTitle(e.target.value)}/>
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
            <input type ="submit" value="Create" />
        </form>
    )
}

export default Create;
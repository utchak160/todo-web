import React, { useState } from 'react';
import style from '../assets/css/create.module.css';
import {withRouter} from 'react-router-dom';
import { addStartup } from '../services/startup.service';

const CreateForm = ({history}) => {
    const [formData, setFormData] = useState({
        name: '',
        country: ''
    });

    const { name, country } = formData;

    const onChange = (e) => {
        e.persist();
        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addStartup(formData).then(res => {
            if (res) {
                history.push('/');
            }
        })
        setFormData({
            name: '',
            country: ''
        })
    }

    return (
        <div className={style.container}>
            <form onSubmit={e => onSubmit(e)}>
            <div className={style.formContainer}>
                <label className={style.labelName}>Name</label>
                <input 
                className={style.field}
                type="text"
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
                />
            </div>
            <div className={style.formContainer}>
                <label className={style.labelName}>Country</label>
                <input
                className={style.field} 
                type="text"
                name='country'
                value={country}
                onChange={(e) => onChange(e)}
                required
                />
            </div>
            <button className={style.submitBtn} type='submit'>Save</button>
            </form>
        </div>
    )
}

export default withRouter(CreateForm)


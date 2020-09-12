import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from '../assets/css/list.module.css';
import ListItem from './ListItem';

function Listdata({list}) {
    return (
        <div className={style.container}>
            <h3>List of Startups</h3>
            {list.map((value, index) => (
                <ListItem index={index} key={value._id} value={value} />
            )
            )}
            <Link to='/create' className={style.createButton}>Create New</Link>
        </div>
    )
}

Listdata.propTypes = {
    list: PropTypes.array.isRequired,
}

export default Listdata


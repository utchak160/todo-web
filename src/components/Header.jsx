import React from 'react'
import PropTypes from 'prop-types';
import style from '../assets/css/header.module.css';


function Header({title}) {
    return (
        <div className={style.container}>
            <h2 className={style.heading}>{title}</h2>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

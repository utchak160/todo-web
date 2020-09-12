import React from 'react'
import PropTypes from 'prop-types'
import style from '../assets/css/list.module.css';

function ListItem({index, value: {name, country}}) {
    return (
        <div className={style.listItem}>
            {index+1}{'.   '}{name} {','} {country}
        </div>
    )
}

ListItem.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.object.isRequired,
}

export default ListItem



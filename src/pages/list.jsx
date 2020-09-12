import React, { Fragment, useEffect, useState } from 'react'
import {getAllStartup} from '../services/startup.service';
import Header from '../components/Header'
import Listdata from '../components/Listdata';

function List() {

    const [listData, setListData] = useState([]);

    useEffect(() => {
        getAllStartup().then((res) => {
            console.log(res);
            setListData(res.data)
        });
    }, [])

    return (
        <Fragment>
            <Header title='Welcome to Startup World' />
            <Listdata list={listData} />
        </Fragment>
    )
}

export default List



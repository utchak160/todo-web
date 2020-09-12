import React, {Fragment} from 'react'
import Header from '../components/Header'
import CreateForm from '../components/createForm'

function Create() {
    return (
        <Fragment>
            <Header title='Create New Startup' />
            <CreateForm />
        </Fragment>
    )
}

export default Create;

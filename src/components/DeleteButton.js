import React from 'react'
import { Button } from 'react-bootstrap'

class DeleteButton extends React.Component {
    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        
    }

    render() {
        return (
            <Button className="m-2" variant="danger">Delete</Button>
        )
    }
}

export default DeleteButton

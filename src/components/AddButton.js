import React from 'react'
import { Button } from 'react-bootstrap'

class AddButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Button className="m-2" variant="success">Add</Button>
        )
    }
}

export default AddButton

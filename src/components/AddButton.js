import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

class AddButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            type: -1,
            value: null
        }
    }

    handleOpen = () => {
        this.setState({isOpen: true})
    }

    handleClose = () => {
        this.setState({isOpen: false})
    }

    handleCreate = () => {
        if (this.state.type !== -1 && this.state.value !== null) {
            let newPage = {
                type: this.state.type,
                value: this.state.value
            }
            let data = this.props.data
    
            data.push(newPage)
            this.props.handler(data)
            this.setState({isOpen: false, type: -1, value: null})
        } else {
            alert('You have to fill all the form before.')
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        return (
            <div>
                <Button className="m-2" variant="success" onClick={this.handleOpen}>Add</Button>
                <Modal show={this.state.isOpen} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    <option value="-1">Select an option</option>
                                    <option value="image">Image</option>
                                    <option value="text">Text</option>
                                </Form.Control>
                            </Form.Group>
                            {
                                this.state.type === 'text' ?
                                    <Form.Group controlId="value">
                                        <Form.Label>Text Content</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={this.handleChange}/>
                                    </Form.Group> :
                                    null
                            }
                            {
                                this.state.type === 'image' ?
                                    <Form.Group controlId="value">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control type="link" placeholder="http://localhost/toto.jpg" onChange={this.handleChange}/>
                                    </Form.Group> :
                                    null
                            }
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={this.handleCreate}>
                            Create the page
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

AddButton.propTypes = {
    data: PropTypes.array,
    handler: PropTypes.func
}

export default AddButton

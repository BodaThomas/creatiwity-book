import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

class DeleteButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleOpen = () => {
        this.setState({isOpen: true})
    }

    handleClose = () => {
        this.setState({isOpen: false})
    }

    handleDelete = () => {
        let data = this.props.data

        data.splice(this.props.index, 1)
        console.log(data)
        this.props.handler(data)
        this.handleClose()
    }

    render() {
        return (
            <div>
                {this.props.data && this.props.data.length ?
                    <div>
                        <Button className="m-2" variant="danger" onClick={this.handleOpen}>Delete</Button>
                        <Modal show={this.state.isOpen} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Really?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure to delete this page?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="danger" onClick={this.handleDelete}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    : 
                    null
                }
            </div>
        )
    }
}

DeleteButton.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number,
    handler: PropTypes.func
}

export default DeleteButton

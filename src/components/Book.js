import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

class Book extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.data || this.props.data === null || !this.props.data[this.props.index]) {
            return (
                <div className="border w-50 h-75 flex" style={{minHeight: '75vh'}}>
                    The book data is empty.
                </div>
            )
        }
        return (
            <div className="border w-50 h-75 flex" style={{minHeight: '75vh', maxHeight: '75vh', overflow: 'auto', display: 'flex'}}>
                {
                    this.props.data[this.props.index].type === 'image' ?
                        <Image src={this.props.data[this.props.index].value} style={{maxHeight: '100%', maxWidth: '100%', margin: 'auto'}}/> :
                        this.props.data[this.props.index].value
                }
            </div>
        )
    }
}

Book.propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
}

export default Book

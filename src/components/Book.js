import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

class Book extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.data || this.props.data === null) {
            return (
                <div className="border w-50 h-75 flex" style={{minHeight: '75vh'}}>
                    The book data is empty.
                </div>
            )
        }
        return (
            <div className="border w-50 h-75 flex" style={{minHeight: '75vh'}}>
                {
                    this.props.data[this.props.index].type === 'image' ?
                        <Image src={this.props.data[this.props.index].value}></Image> :
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

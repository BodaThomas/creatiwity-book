import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Book, AddButton, DeleteButton } from './components'
import { Button } from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bookData: [
                {
                    type: 'text',
                    value: 'Test number 1'
                },
                {
                    type: 'text',
                    value: 'Test number 2'
                },
                {
                    type: 'text',
                    value: 'Test number 3'
                }
            ],
            index: 0
        }
    }

    dataHandler = (newData) => {
        this.setState({bookData: newData})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Book data={this.state.bookData} index={this.state.index} handler={this.dataHandler}/>
                    <div>
                        <Button onClick={() => {
                            if (this.state.index > 0)
                                this.setState({index: this.state.index - 1})
                            else
                                this.setState({index: this.state.bookData.length - 1})
                        }}>Previous</Button>
                        <Button onClick={() => {
                            if (this.state.index + 1 < this.state.bookData.length)
                                this.setState({index: this.state.index + 1})
                            else
                                this.setState({index: 0})
                        }}>Next</Button>
                    </div>
                    <div>
                        <AddButton/>
                        <DeleteButton/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

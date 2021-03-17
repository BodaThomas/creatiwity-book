import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Book, AddButton, DeleteButton } from './components'
import { Button } from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],
            index: 0
        }
    }

    componentDidMount() {
        let storageData = JSON.parse(localStorage.getItem('bookData'))

        if (storageData && storageData !== null)
            this.setState({bookData: storageData})
    }

    dataHandler = (newData) => {
        localStorage.setItem('bookData', JSON.stringify(newData))
        this.setState({bookData: newData})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Book data={this.state.bookData} index={this.state.index} handler={this.dataHandler}/>
                    {
                        this.state.bookData && this.state.bookData.length > 1 ?
                            <div>
                                <Button className="m-2" onClick={() => {
                                    if (this.state.index > 0)
                                        this.setState({index: this.state.index - 1})
                                    else
                                        this.setState({index: this.state.bookData.length - 1})
                                }}>Previous page</Button>
                                <Button className="m-2" onClick={() => {
                                    if (this.state.index + 1 < this.state.bookData.length)
                                        this.setState({index: this.state.index + 1})
                                    else
                                        this.setState({index: 0})
                                }}>Next page</Button>
                            </div> :
                            null
                    }
                    <div>
                        <AddButton data={this.state.bookData} handler={this.dataHandler}/>
                        <DeleteButton data={this.state.bookData} index={this.state.index} handler={this.dataHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

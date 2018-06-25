import React from 'react'

class GroceryPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            groceries: []
        }


    }

    setGroceryList(groceries) {
        this.setState({groceries: groceries})
    }

    findAllGroceries() {

    }


    render() {
        return (

        )
    }
}
export default GroceryPage;
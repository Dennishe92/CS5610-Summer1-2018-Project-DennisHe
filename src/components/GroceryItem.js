import React from 'react'

class GroceryItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <tr>
                <td>{this.props.grocery.name}</td>
                <td>{this.props.grocery.sellerName}</td>
                <td>{this.props.grocery.price}</td>
            </tr>
        )
    }



}
export default GroceryItem
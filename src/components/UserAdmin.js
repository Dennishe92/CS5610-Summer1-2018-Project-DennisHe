import React from 'react'

class UserAdmin extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.role}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.phone}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}
export default UserAdmin;
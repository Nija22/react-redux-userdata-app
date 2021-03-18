import React from 'react';
import { connect } from 'react-redux';
import { renderData } from '../actions/searchAction.js';

class UserInfo extends React.Component {
    constructor(props) {
        const { userData } = props
        super(props);
        this.state = {
            userData: userData
        }
    }
    componentDidUpdate(previousProps) {
        if (this.props.value !== previousProps.value) {
            const data = this.props.userData;
            const filteredData = data.filter((obj) => Object.keys(obj).some(key => {
                if (typeof (obj[key]) !== "object") {
                    return (obj && obj[key].toString().toLowerCase().includes(this.props.value))
                }
            }))
            this.setState({
                userData: filteredData
            });
            renderData(filteredData);
        }
    }
    render() {
        return (
            <table>
                <caption>User Info</caption>
                <thead>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {this.state.userData && this.state.userData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}, {item.address.suite},
                            <br /> {item.address.city}, {item.address.zipcode}.</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(data) {

    return {
        userData: data.userdata.contents,
        value: data.userdata.value
    }
}

export default connect(mapStateToProps)(UserInfo);

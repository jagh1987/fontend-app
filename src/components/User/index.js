//Dependencies
import React, {Component} from 'react';
//import ReactQueryParams from 'react-query-params';
class User extends Component {

    constructor(props) {
        super(props);

        this.state = {id: -1};
    }

    componentDidMount() {
        const userId= new URLSearchParams(window.location.search).get("id");
        this.setState({ id: userId });
    }

    render() {
        const value = this.state.id;
        return (
            <div className = "container">
                <h3> User Details { value } </h3>
            </div>
        );
    }
}
export default User;
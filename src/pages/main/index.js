import React, {Component} from "react";
import api from "../../services/api";

export default class Main extends Component {

    state = {
        users: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/user");
        this.setState({users: response.data.data});
    };

    render() {
        return (
            <div className="user-list">
                {
                    this.state.users.map(user => (
                        <h2 key={user.id}>{user.name}</h2>
                    ))
                }
            </div>
        );
    }

}
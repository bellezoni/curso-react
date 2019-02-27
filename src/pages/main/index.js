import React, {Component} from "react";
import api from "../../services/api";
import './styles.css';
export default class Main extends Component {

    state = {
        users: [],
        usersInfo: {},
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/user?page=${page}`);
        const { data, ...usersInfo } = response.data;
        this.setState({users: data, usersInfo});
    };

    nextPage = () => {
        const {current_page, last_page} = this.state.usersInfo;
        if (current_page === last_page) { return }
        this.loadProducts(current_page+1)
    };

    prevPage = () => {
        const {current_page} = this.state.usersInfo;
        if (current_page === 1) { return }
        this.loadProducts(current_page-1)
    };

    render() {
        const { users, usersInfo: {current_page, last_page} } = this.state;
        return (
            <div className="user-list">
                {
                    users.map(user => (
                        <article key={user.id}>
                            <strong>{user.name}</strong>
                            <p>{ user.email }</p>
                            <a href="">Acessar</a>
                        </article>
                    ))
                }
                <div className="actions">
                    <button disabled={ current_page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={ current_page === last_page} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }

}
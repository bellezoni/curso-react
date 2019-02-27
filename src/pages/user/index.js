import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class User extends Component {

    state = {
      user: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({ user: response.data.data });
    }

    render() {
        const { user } = this.state;


        return (
            <div className="user-info">
                <h1>
                    { user.name }
                </h1>
                <p>Email: { user.email }</p>
                <p>Data de criação: { user.created_at }</p>
                <p>Data de atualização: { user.updated_at }</p>
            </div>
        );
    }
}

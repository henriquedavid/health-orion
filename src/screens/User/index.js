import * as React from 'react';
import './index.css';

function User() {

    const [nome, setNome] = React.useState('');
    const [id, setId] = React.useState('');
    const [dataNascimento, setDataNascimento] = React.useState('');

    return (
        <div>
            <div>
                <h1>NOW</h1>
                <p>Monitore a saúde familiar com um toque!</p>
            </div>
            <div>
                <h3>Infomações do Usuário</h3>

                <p>Nome: {nome} - {id}</p>
                <p>Data de Nascimento: {dataNascimento}</p>
            </div>
        </div>
    );
}

export default User;

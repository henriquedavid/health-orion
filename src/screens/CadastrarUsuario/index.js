import * as React from 'react';
import Providers from '../../services/Providers';
import './index.css';

function CadastrarUsuario() {

    const [id, setId] = React.useState()
    const [nome, setNome] = React.useState()
    const [dataNascimento, setDataNascimento] = React.useState();
    const [posicao, setPosicao] = React.useState();

    // async function cadastrar() {
    //     try{
    //         let r = await Providers.cadastrarNovoUsuario(id, nome, dataNascimento, posicao);
    //         console.log(r);
    //         alert("Paciente Cadastrado!");
    //     } catch(err){
    //         alert("Erro ao realizar o cadastro do paciente")
    //     }
    // }

    return (
        <div>
            <div>
                <h1>NOW</h1>
                <p>Monitore a saúde familiar com um toque!</p>
            </div>
            <div>
                <h3>Cadastrar Usuário</h3>
                <form onSubmit={() => {}}>
                    <label>
                        ID do Usuário:
                        <input type="text" name={id} onChange={event => setId(event.target.value)} />
                    </label><br />
                    <label>
                        Nome:
                        <input type="text" name={nome} onChange={event => setNome(event.target.value)} />
                    </label><br />
                    <label>
                        Data de Nascimento:
                        <input type="text" name={dataNascimento} onChange={event => setDataNascimento(event.target.value)} />
                    </label><br />
                    <label>
                        Posição:
                        <input type="text" name={posicao} onChange={event => setPosicao(event.target.value)} />
                    </label><br />
                    <input type="submit" value="Cadastrar Usuário" />
                </form>
            </div>
        </div>
    );
}

export default CadastrarUsuario;

import * as React from 'react';
import './index.css';

function CadastrarDadosVitais() {

    const [pressao, setPressao] = React.useState()
    const [temperatura, setTemperatura] = React.useState()
    const [saturacao, setSaturacao] = React.useState()

    function cadastrar() {
        try{

        } catch(err){
            alert("Erro ao realizar o cadastro dos dados vitais")
        }
    }

    return (
        <div>
            <div>
                <h1>NOW</h1>
                <p>Monitore a saúde familiar com um toque!</p>
            </div>
            <div>
                <h3>Cadastrar Informações sobre o Usuário</h3>
                <form>
                    <label>
                        ID do Usuário:
                        <input type="text" name={temperatura} onChange={event => setTemperatura(event.target.value)} />
                    </label><br />
                    <label>
                        Temperatura:
                        <input type="text" name={temperatura} onChange={event => setTemperatura(event.target.value)} />
                    </label><br />
                    <label>
                        Pressão:
                        <input type="text" name={pressao} onChange={event => setPressao(event.target.value)} />
                    </label><br />
                    <label>
                        Saturação:
                        <input type="text" name={saturacao} onChange={event => setSaturacao(event.target.value)} />
                    </label><br />
                    <input type="submit" value="Cadastrar Dados Vitais" />
                </form>
            </div>
        </div>
    );
}

export default CadastrarDadosVitais;

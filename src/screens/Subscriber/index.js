import * as React from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import {
    useLocation
} from "react-router-dom";
import './index.css';
import Providers from '../../services/Providers';
import Item from '../Item';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Subscriber() {

    // const [temperatura, setTemperatura] = React.useState([]);
    // const [pressao, setPressao] = React.useState([]);
    // const [saturacao, setSaturacao] = React.useState([]);
    const [temperaturaStatus, setTemperaturaStatus] = React.useState(false);
    const [pressaoStatus, setPressaoStatus] = React.useState(false);
    const [saturacaoStatus, setSaturacaoStatus] = React.useState(false);
    const [notificacoes, setNotificacoes] = React.useState([]);

    let query = useQuery();
    const id = query.get("id");

    async function monitorarPressao() {
        try {
            setPressaoStatus(true);
            await Providers.subscreverPressao(id);
            alert("Monitorando!")
        } catch (err) {
        }
    }

    async function monitorarTemperatura() {
        try {
            setTemperaturaStatus(true);
            await Providers.subscreverTemperatura(id);
            alert("Monitorando!")
        } catch (err) {
        }
    }

    async function monitorarSaturacao() {
        try {
            setSaturacaoStatus(true);
            await Providers.subscreverSaturacao(id);
            alert("Monitorando!")
        } catch (err) {
        }
    }


    var pressao_verify = new EventSourcePolyfill(`http://localhost:8080/subscribe/pressao/dashboard/${id}`);


    pressao_verify.onmessage = function (e) {
        let data = JSON.parse(e.data);
        let not = notificacoes;
        for (let o of data.contextResponses) {
            let info = {
                id: notificacoes.length + 1,
                name: o.contextElement.attributes[0].name,
                valor: o.contextElement.attributes[0].value,
                data: o.contextElement.attributes[0].metadatas[0].value
            }
            not.push(info);
            alert("ATENÇÃO\n" + info.name + " = " + info.valor)
            console.log(o);
        }
        setNotificacoes(not)
    }

    var temperatura_verify = new EventSourcePolyfill(`http://localhost:8080/subscribe/temperatura/dashboard/${id}`);


    temperatura_verify.onmessage = function (e) {
        let data = JSON.parse(e.data);
        let not = notificacoes;
        for (let o of data.contextResponses) {
            let info = {
                id: notificacoes.length + 1,
                name: o.contextElement.attributes[0].name,
                valor: o.contextElement.attributes[0].value,
                data: o.contextElement.attributes[0].metadatas[0].value
            }
            not.push(info);
            alert("ATENÇÃO\n" + info.name + " = " + info.valor)
            console.log(o);
        }
        setNotificacoes(not)
    }

    var saturacao_verify = new EventSourcePolyfill(`http://localhost:8080/subscribe/saturacao/dashboard/${id}`);


    saturacao_verify.onmessage = function (e) {
        let data = JSON.parse(e.data);
        let not = notificacoes;
        for (let o of data.contextResponses) {
            let info = {
                id: notificacoes.length + 1,
                name: o.contextElement.attributes[0].name,
                valor: o.contextElement.attributes[0].value,
                data: o.contextElement.attributes[0].metadatas[0].value
            }
            not.push(info);
            alert("ATENÇÃO\n" + info.name + " = " + info.valor)
            console.log(o);
        }
        setNotificacoes(not)
    }





    function gerarLista(notificacoes) {
        const listItems = notificacoes.map((item) => <Item item={item} />);
        return (
            <ul>{listItems}</ul>
        );

    }

    return (
        <div>
            <div>
                <h1>NOW</h1>
                <p>Monitore a saúde familiar com um toque!</p>
            </div>
            <div>
                <h3>Informações do Usuário de ID = {id}</h3>
                <button onClick={() => monitorarPressao()} disabled={pressaoStatus}>
                    {!pressaoStatus ? ("Monitorar Pressão") : ("Monitorando Pressão")}
                </button>
                <button onClick={() => monitorarTemperatura()} disabled={temperaturaStatus}>{!temperaturaStatus ? ("Monitorar Temperatura") : ("Monitorando Temperatura")}</button>
                <button onClick={() => monitorarSaturacao()} disabled={saturacaoStatus}>{!saturacaoStatus ? ("Monitorar Saturação") : ("Monitorando Saturação")}</button>

            </div>
            <div>

                {gerarLista(notificacoes)}

                <p>---------</p>
            </div>
        </div>
    );
}

export default Subscriber;

import { api } from "./api";


var cadastrarDadosVitais = async (id, pressao, temperatura, saturacao, lat, lon) => {
    try {
        let dt = {
            type: "Dados_Vitais",
            isPattern: "false",
            id: `${id}`,
            attributes: [
                {
                    name: "Pressao",
                    type: "float",
                    value: pressao,
                    metadatas: [
                        {
                            name: "Data",
                            type: "DateTime",
                            value: new Date()
                        }
                    ]
                },
                {
                    name: "Temperatura",
                    type: "float",
                    value: temperatura,
                    metadatas: [
                        {
                            name: "Data",
                            type: "DateTime",
                            value: new Date()
                        }
                    ]
                },
                {
                    name: "Saturacao",
                    type: "float",
                    value: saturacao,
                    metadatas: [
                        {
                            name: "Data",
                            type: "DateTime",
                            value: new Date()
                        }
                    ]
                }
            ]
        }
        let r = await api.post(`/publish?lat=${lat}&lon=${lon}`, dt);
        return r.data;
    } catch (err) {
        throw err;
    }
}

var updateDadosVitais = async (id, pressao, temperatura, saturacao, lat, lon) => {
    try {
        let dt = {
            type: "Dados_Vitais",
            isPattern: "false",
            id: id,
            attributes: [
                {
                    name: "Pressão",
                    type: "float",
                    value: pressao
                },
                {
                    name: "Temperatura",
                    type: "float",
                    value: temperatura
                },
                {
                    name: "Saturação",
                    type: "float",
                    value: saturacao
                }
            ]
        }
        let r = await api.post(`/publish?lat=${lat}&lon=${lon}`, dt);
        return r.data;
    } catch (err) {
        throw err;
    }
}

var subscreverPressao = async (id) => {
    try{
        let dt = {
            entities: [
                {
                    isPattern: "false",
                    id: id,
                    type:"Dados_Vitais"
                }
            ],
            attributes:[
                "Pressao"
            ],
            reference: `http://192.168.1.68:8080/subscribe/pressao`,
            duration: "P1M",
            notifyConditions: [
                {
                    type: "ONCHANGE"
                }
            ],
            throttling: "PT5S"
        }

        let rq = await api.post(`/subscribe`, dt);
    } catch(err){
        alert("ERRO AO SUBSCREVER NA PRESSÃO")
        throw err;
    }
}

var subscreverTemperatura = async (id) => {
    try{
        let dt = {
            entities: [
                {
                    isPattern: "false",
                    id: id,
                    type:"Dados_Vitais"
                }
            ],
            attributes:[
                "Temperatura"
            ],
            reference: `http://192.168.1.68:8080/subscribe/temperatura`,
            duration: "P1M",
            notifyConditions: [
                {
                    type: "ONCHANGE"
                }
            ],
            throttling: "PT5S"
        }

        let rq = await api.post(`/subscribe`, dt);
    } catch(err){
        alert("ERRO AO SUBSCREVER NA TEMPERATURA")
        throw err;
    }
}

var subscreverSaturacao = async (id) => {
    try{
        let dt = {
            entities: [
                {
                    isPattern: "false",
                    id: id,
                    type:"Dados_Vitais"
                }
            ],
            attributes:[
                "Saturacao"
            ],
            reference: `http://192.168.1.68:8080/subscribe/saturacao`,
            duration: "P1M",
            notifyConditions: [
                {
                    type: "ONCHANGE"
                }
            ],
            throttling: "PT5S"
        }

        let rq = await api.post(`/subscribe`, dt);
    } catch(err){
        alert("ERRO AO SUBSCREVER NA SATURAÇÃO")
        throw err;
    }
}

let Providers = {
    cadastrarDadosVitais: cadastrarDadosVitais,
    updateDadosVitais: updateDadosVitais,
    subscreverPressao: subscreverPressao,
    subscreverTemperatura: subscreverTemperatura,
    subscreverSaturacao: subscreverSaturacao
};

export default Providers;
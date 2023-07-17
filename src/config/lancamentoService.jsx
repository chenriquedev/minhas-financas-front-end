import { del, get } from "./api"

const URL = '/api/lancamentos'

export const buscarLancamento = (lancamentoFiltro) =>{
    let params = `?usuario=${lancamentoFiltro.usuario}`

    if(lancamentoFiltro.ano){
        params = `${params}&ano=${lancamentoFiltro.ano}`
    }

    if(lancamentoFiltro.mes){
        params = `${params}&mes=${lancamentoFiltro.mes}`
    }

    if(lancamentoFiltro.tipo){
        params = `${params}&tipo=${lancamentoFiltro.tipo}`
    }

    if(lancamentoFiltro.status){
        params = `${params}&status=${lancamentoFiltro.status}`
    }
    if(lancamentoFiltro.descricao){
        params = `${params}&descricao=${lancamentoFiltro.descricao}`
    }

    return get(`${URL}${params}`)
}

export const deletarLancamento = (id) =>{
    return del(`${URL}/${id}`)
}
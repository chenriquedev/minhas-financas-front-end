export const adicionarItem = (chave, valor) =>{
    localStorage.setItem(chave,JSON.stringify(valor))
}

export const obterItem = (chave) =>{
   const dadosDoUsuario = localStorage.getItem(chave)

    return JSON.parse(dadosDoUsuario)
}
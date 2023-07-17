import { useEffect, useState } from 'react';
import Body from '../Components/Body';
import Buttons from '../Components/Buttons';
import Card from '../Components/Card';
import { obterSaldo } from '../config/usuarioService';
import { obterItem } from '../config/localstorageService';

function Home() {
    const [saldo,setSaldo] = useState()

     useEffect(()=>{
        const dadosDoUsuario = obterItem('_USUARIO_LOGADO')
        const valor = async () =>{
            const request = await obterSaldo(dadosDoUsuario.id)
            setSaldo(request.data)
        }
        valor()
    },[]) 

    


    return (
        <Body>
            <Card title="Minhas Finanças">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead" style={{display: 'flex', gap:'20px'}}>
                    <Buttons classe="success btn-lg" desc="Cadastrar Usuario" link linkTo='/cadastro-usuario'/>
                    <Buttons classe="danger btn-lg" desc="Cadastrar Lançamento"/>
                </p>
            </Card>
        </Body>
    );
}

export default Home;
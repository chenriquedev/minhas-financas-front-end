import { Routes, Route } from 'react-router-dom'
import Login from '../views/Login';
import CadastroUsuario from '../views/CadastroUsuario';
import Home from '../views/Home';
import ConsultaLancamento from '../views/ConsultaLancamento';

function rotas() {
    return (

        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro-usuario' element={<CadastroUsuario />} />
            <Route path='/consulta-lancamento' element={<ConsultaLancamento/>} />
        </Routes>

    );
}

export default rotas;
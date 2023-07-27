import NavBarItem from "./NavBarItem";
import { removerUsuarioAutenticado, obterUsuarioLogado } from "../config/AuthService";
import { useContext, useState } from "react";
import DadosContext from "../config/context/DadosContext";

function Navbar() {
  const {usuario, encerrarSessao} = useContext(DadosContext)


  const usuarioAutenticado = () => {
    if(usuario){
      return usuario.isAutenticado
    }
  }

  const logout = () => {
    encerrarSessao()
  }

  const navbar = [
    {
      descricao: 'home',
      linkTo: '/home',
      onClick: '',
      render: usuarioAutenticado()
    },
    {
      descricao: 'Usuários',
      linkTo: '/cadastro-usuario',
      onClick: '',
      render: usuarioAutenticado()
    },
    {
      descricao: 'Lançamentos',
      linkTo: '/consulta-lancamento',
      onClick: '',
      render: usuarioAutenticado()
    },
    {
      descricao: 'Sair',
      linkTo: '/',
      onClick: logout,
      render: usuarioAutenticado()
    },
  ]



  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-success p-3" >
      <div className="container">
        <a href="/home" className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bolder' }}>Minhas Finanças</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {navbar.map((item, index) => (
              item.render ?
                <NavBarItem key={index} descricao={item.descricao} linkTo={item.linkTo} onClick={item.onClick} render={item.render} />

                : null))}
            {/*  <NavBarItem descricao="Home" linkTo='/home' />
            <NavBarItem descricao="Usuários" linkTo='/cadastro-usuario' />
            <NavBarItem descricao="Lançamentos" linkTo='/consulta-lancamento' />
            <NavBarItem descricao="Sair" linkTo='/' onClick={e => { logout() }} /> */}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
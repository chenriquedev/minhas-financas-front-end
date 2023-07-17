import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-success p-3" >
      <div className="container">
        <a href="/home" className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bolder' }}>Minhas Finanças</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarItem descricao="Home" linkTo='/home' />
            <NavBarItem descricao="Usuários" linkTo='/cadastro-usuario' />
            <NavBarItem descricao="Lançamentos" linkTo='/consulta-lancamento' />
            <NavBarItem descricao="Login" linkTo='/' />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
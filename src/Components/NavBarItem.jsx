import { Link } from "react-router-dom";

function NavBarItem({linkTo, descricao = 'descrição do link'}) {
    return (
        
            <li className="nav-item">
                <Link className="nav-link" to={linkTo}>{descricao}</Link>
            </li>
        
    );
}

export default NavBarItem;
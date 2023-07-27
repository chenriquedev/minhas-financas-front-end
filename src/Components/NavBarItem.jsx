import { Link } from "react-router-dom";

function NavBarItem({linkTo, descricao = 'descrição do link', onClick}) {
    return (
        
            <li className="nav-item">
                <Link onClick={onClick} className="nav-link" to={linkTo}>{descricao}</Link>
            </li>
        
    );
}

export default NavBarItem;
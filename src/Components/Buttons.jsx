import { Link } from "react-router-dom"

function Buttons({ type = 'button', desc, onClick, classe, link = false, linkTo }) {

  const button = link ? <Link to={linkTo}>
    <button onClick={onClick} type={type} className={`btn btn-${classe}`}
    >{desc}</button>
  </Link> : <button onClick={onClick} type={type} className={`btn btn-${classe}`}
  >{desc}</button>

  return (
    button
  );
}

export default Buttons;
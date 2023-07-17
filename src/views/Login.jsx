import Buttons from "../Components/Buttons";
import Body from "../Components/Body";
import Card from "../Components/Card";
import FormGroup from "../Components/FormGroup";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "../config/usuarioService";
import { adicionarItem } from "../config/localstorageService";

import Swal from 'sweetalert2'
import { mensagemErro } from "../Components/toastr";

function Login() {
  const [userData, setUserData] = useState({ email: '', senha: '' });
  const navigate = useNavigate()

  const entrar = async () => {
    try {
      const login = await autenticar({
        email: userData.email,
        senha: userData.senha
      })
      login.status === 200 ?
        (adicionarItem('_USUARIO_LOGADO', login.data),
          navigate('/home')
        ) : null
    } catch (error) {
      error ?
      mensagemErro(error.response.data)
        /* Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data}`

        })  */: null
      setUserData({ email: '', senha: '' })
    }
  }

  return (
    <>
      <Body>
        <Card title="Login">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <fieldset style={{ display: 'flex', flexDirection: "column", gap: '20px' }}>
                  <FormGroup
                    value={userData.email}
                    change={e => setUserData({ ...userData, email: e.target.value })}
                    label="Email: *"
                    id="exampleInputEmail1"
                    placeholder="Digite o seu email"
                    describedby="emailHelp"
                    type="email"
                  />
                  <FormGroup
                    value={userData.senha}
                    change={e => setUserData({ ...userData, senha: e.target.value })}
                    label="Senha: *"
                    id="exampleInputPassword1"
                    placeholder="Digite a sua senha"
                    describedby="passwordHelp"
                    type="password"
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Buttons desc="Entrar" classe="success" onClick={entrar} />
                    <Buttons desc="Cadastrar" classe="danger" link linkTo="/cadastro-usuario" />
                  </div>

                </fieldset>
              </div>
            </div>
          </div>
        </Card>
      </Body>
    </>
  );
}

export default Login;

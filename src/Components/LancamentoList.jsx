import currencyFormatter from 'currency-formatter'
import Buttons from './Buttons';
function LancamentoList({ caption, lancamento, edit, del }) {

  const lancamentos = lancamento.map(item => (
    <tr key={item.id}>
      <td>{item.descricao}</td>
      <td>{currencyFormatter.format(item.valor, { locale: 'pt-BR' })}</td>
      <td>{item.tipo}</td>
      <td>{item.mes}</td>
      <td>{item.status}</td>
      <td>
        <Buttons desc="Editar" classe="success" onClick={e => edit(item.id)}/>
        <Buttons desc="Deletar" classe="danger" onClick={e => del(item)} />
      </td>

    </tr>
  ))


  return (
    <table className="table table-hover table-striped caption-top">
      <caption>{caption}</caption>
      <thead className="table-light">
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Tipo</th>
          <th scope="col">Mês</th>
          <th scope="col">Situação</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {lancamentos}
      </tbody>
    </table>
  );
}

export default LancamentoList;
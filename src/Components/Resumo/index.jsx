import './styles.css';

function Resumo({ transacoes }) {
    let entradas = 0;
    let saidas = 0;
    for (let transacao of transacoes) {
        if (transacao.tipo === "entrada") {
            entradas += transacao.valor;
        } else {
            saidas += transacao.valor;
        }
    }
    return (
        <div className="resumo">
            <h1>Resumo</h1>
            <div className="entradas">
                <p>Entradas</p>
                <strong>{`R$ ${(entradas / 100).toFixed(2)}`}</strong>
            </div>
            <div className="saidas">
                <p>Saídas</p>
                <strong>{`R$ ${(saidas / 100).toFixed(2)}`}</strong>
            </div>
            <div className="saldo">
                <p>Saldo</p>
                <strong>{`R$ ${((entradas - saidas) / 100).toFixed(2)}`}</strong>
            </div>
        </div>
    )
}

export default Resumo;
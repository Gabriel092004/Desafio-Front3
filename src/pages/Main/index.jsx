import './styles.css';
import Header from '../../Components/Header';
import Resumo from '../../Components/Resumo';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { useEffect } from 'react';
import { useState } from 'react';


function Main() {

    const [response, setResponse] = useState();
    async function handleTransitions() {
        const token = getItem('token');

        const resposta = await api.get('/transacao', {
            headers: {
                "Authorization": `Bearer ${token}`

            }
        })

        setResponse(resposta);
        //console.log(response)
    }

    handleTransitions()


    return (
        <div className='main'>
            <div className='transacoes'>
                <table className='table-transacoes'>
                    <tr>
                        <td className='table_td data'>Data</td>
                        <td className='table_td'>Dia da semana</td>
                        <td className='table_td'>Categoria</td>
                        <td className='table_td'>Valor</td>
                    </tr>
                </table>

                {/* <Resumo /> */}

            </div>
        </div>
    )
}

export default Main;
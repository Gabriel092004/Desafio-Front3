import './styles.css';
import Header from '../../Components/Header';
import Resumo from '../../Components/Resumo';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { useEffect } from 'react';
import { useState } from 'react';
import ModalEditProfile from '../../Components/Perfil';


function Main() {

    const [response, setResponse] = useState();
    const [showModalEditProfile, setShowModalEditProfile] = useState(false);
    const token = getItem('token');

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
        <main>
            <Header setShowModalEditProfile={() => setShowModalEditProfile(true)} />
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
            {showModalEditProfile && (
                <ModalEditProfile
                    // headers={headers}
                    setShowModalEditProfile={setShowModalEditProfile}
                />
            )}
        </main>
    )
}

export default Main;
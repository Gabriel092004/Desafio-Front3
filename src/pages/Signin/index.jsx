import { useState } from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

function Signin() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ nome: '', email: '', senha: '' })

    function handleChangeInputValue(e) {
        setForm({ ...form, [e.target.nome]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!form.nome || !form.email || !form.senha) {
                return;
            }
            const response = await api.post('/usuarios', {
                ...form
            });

            setUsers([...users, response.data]);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <header className='header'>
                <img src={logo} alt="DinDin Logo" />
                <h1>Dindin</h1>
            </header>
            <div className='container-signin'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1 className='title'>Cadastre-se</h1>
                    <label className='label'>Nome</label>
                    <input
                        className='input'
                        type='text'
                        value={form.name}
                        onChange={handleChangeInputValue}
                    />
                    <label className='label'>E-mail</label>
                    <input
                        className='input'
                        type='text'
                        value={form.email}
                        onChange={handleChangeInputValue}
                    />
                    <label className='label'>Senha</label>
                    <input
                        className='input'
                        type='password'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                    />
                    <label className='label'>Confirmação de senha</label>
                    <input
                        className='input'
                        type='password'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                    />
                    <button className='btn-cadastrar'>Cadastrar</button>

                    <a href='#'>Já tem cadastro? Clique aqui!</a>
                </form>
            </div>
        </>
    );
}

export default Signin;
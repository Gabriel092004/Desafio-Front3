import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

function Signin() {
    const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' })
    const navigate = useNavigate();

    function handleChangeInputValue(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!form.nome || !form.email || !form.senha || !form.confirmarSenha) {
                return;
            }

            if (form.confirmarSenha !== form.senha) {
                alert('Verifique as senhas')
                return;
            }

            const response = await api.post('/usuarios', {
                ...form
            });

            console.log(response);
            navigate('/Login');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='signin'>
            <header className='header'>
                <img src={logo} alt="DinDin Logo" />
                <h1>Dindin</h1>
            </header>
            <div className='container-signin'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1 className='title'>Cadastre-se</h1>
                    <label htmlFor='nome' className='label'>Nome</label>
                    <input
                        id='nome'
                        name='nome'
                        className='input'
                        type='text'
                        value={form.nome}
                        onChange={handleChangeInputValue}
                    />
                    <label htmlFor='email' className='label'>E-mail</label>
                    <input
                        id='email'
                        name='email'
                        className='input'
                        type='text'
                        value={form.email}
                        onChange={handleChangeInputValue}
                    />
                    <label htmlFor='senha' className='label'>Senha</label>
                    <input
                        id='senha'
                        name='senha'
                        className='input'
                        type='password'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                    />
                    <label htmlFor='confirmar-senha' className='label'>Confirmação de senha</label>
                    <input
                        id='confirmar-senha'
                        name='confirmarSenha'
                        className='input'
                        type='password'
                        value={form.confirmarSenha}
                        onChange={handleChangeInputValue}
                    />
                    <button className='btn-cadastrar'>Cadastrar</button>

                    <Link className='signin-link' to='/'>Já tem cadastro? Clique aqui!</Link>
                </form>
            </div>
        </div>
    );
}

export default Signin;
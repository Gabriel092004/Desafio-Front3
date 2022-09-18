import { useEffect, useState } from 'react';
import close from '../../assets/close.svg';
import api from '../../services/api';
import { getItem, setItem } from '../../utils/storage';
import './styles.css';


export default function ModalEditProfile({ setShowModalEditProfile }) {
    const token = getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const [user, setUser] = useState({});
    const [form, setForm] = useState({});
    // const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(() => {
        setForm({ nome: user.nome, email: user.email, senha: user.senha });
    }, [user]);

    async function loadUser() {
        const { data } = await api.get('/usuario', {
            headers,
        });
        setUser(data);
    };

    function handleChangeInputValue(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (form.senha !== form.confirmarSenha) {
            alert('Verifique as senhas');
            return;
        }
        try {
            await api.put('/usuario', { ...form }, { headers });
            setShowModalEditProfile(false);
            setItem('username', form.nome);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1 className='title'>Editar Perfil</h1>
                <img
                    src={close}
                    alt='Fechar janela'
                    onClick={() => setShowModalEditProfile(false)}
                    className='btn-fechar'
                />

                <form className='modal-form' onSubmit={handleSubmit}>

                    <label className='label' htmlFor='nome'>
                        Nome
                    </label>
                    <input
                        id='nome'
                        type='text'
                        name='nome'
                        className='input'
                        value={form.nome || ''}
                        onChange={handleChangeInputValue}
                    />

                    <label className='label' htmlFor='email'>
                        E-mail
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='input'
                        value={form.email || ''}
                        onChange={handleChangeInputValue}
                    />

                    <label className='label' htmlFor='password'>
                        Senha
                    </label>
                    <input
                        id='password'
                        type='password'
                        name='senha'
                        className='input'
                        value={form.senha}
                        onChange={handleChangeInputValue}
                    />

                    <label className='label' htmlFor='confirm-password'>
                        Confirmação de senha
                    </label>
                    <input
                        id='confirm-password'
                        type='password'
                        name='confirmarSenha'
                        className='input'
                        value={form.confirmPassword}
                        onChange={handleChangeInputValue}
                    />
                    <div className='btn-alinhar'>
                        <button className='btn-confirmar' type='submit'>
                            Confirmar
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
}
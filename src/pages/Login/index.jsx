import './style.css';
import Logo from '../../assets/logo.svg'
import { useRef } from 'react';
import api from '../../services/api';
import { setItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';


function LoginUsuario() {
    const emailRef = useRef('');
    const senhaRef = useRef('');

    const navigate = useNavigate();

    async function handleSubmit() {

        try {
            const resposta = await api.post('/login', { email: emailRef.current.value, senha: senhaRef.current.value })

            setItem('token', resposta.data.token);
            setItem('usuario', resposta.data.usuario.nome);

            navigate('/caminhoPrincipal')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="App">
            <header className='header'>
                <img className='header_img' src={Logo}></img>
                <h1 className='header_h1'>Dindin</h1>
            </header>
            <div className='div'>
                <section className='section-one'>
                    <p className='section_p-first'>
                        Controle suas <span className='section-one_span'>finanças</span>, sem planilha chata.
                    </p>
                    <p className='section_p-second'>
                        Organizar as suas finanças nunca foi tão fácil,
                        com o DINDIN, você tem tudo num único lugar e em um clique de distância.
                    </p>
                    <button className='btn_section-one'>
                        Cadastre-se
                    </button>
                </section>
                <section className='section-two'>
                    <span className='section-two_span'>
                        Login
                    </span>
                    <label className='label' htmlFor='input_email'>E-mail</label>
                    <input id='input_email' className='input' type='e-mail' ref={emailRef}>

                    </input>
                    <label className='label' htmlFor='input_password'>Senha</label>
                    <input id='input_password' className='input' type='password' ref={senhaRef}></input>
                    <button onClick={() => handleSubmit()} className='btn_section-two'>Entrar</button>
                </section>
            </div>
        </div>
    );
}

export default LoginUsuario;
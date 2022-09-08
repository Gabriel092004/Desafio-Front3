import './styles.css';
import logo from '../../assets/logo.svg';

function Login() {
    return (
        <>
            <header className='header'>
                <img src={logo} alt="DinDin Logo" />
                <h1>Dindin</h1>
            </header>
            <div className='container-login'>
                <div>
                    <h1 className='title'>Controle suas <strong>finanças</strong>,<br />
                        sem planilha chata.</h1>

                    <p className='subtitle'>
                        Organizar as suas finanças nunca foi tão fácil,<br />
                        com o DINDIN, você tem tudo num único lugar<br />
                        e em um clique de distância.
                    </p>
                    <button className='btn-cadastro'>Cadastre-se</button>
                </div>
                <div>
                    <form className='form'>
                        <h1 className='login'>Login</h1>
                        <label className='label'>E-mail</label>
                        <input
                            className='input'
                            type='text'
                        />
                        <label className='label'>Senha</label>
                        <input
                            className='input'
                            type='password'
                        />
                        <button className='btn-entrar'>Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
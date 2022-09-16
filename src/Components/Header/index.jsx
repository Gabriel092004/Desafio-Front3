import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Logout from '../../assets/logout.svg';
import Profile from '../../assets/user.svg';
import { clear } from '../../utils/storage';
import './styles.css';


const Header = () => {
    const navigate = useNavigate()

    function logout() {
        clear()
        navigate('/')
    }

    return (
        <div className='container-header'>
            <div className='logo'>
                <img src={Logo} alt='Logomarca Dindin' />
                <h1>Dindin</h1>
            </div>
            <div className='images'>
                <img src={Profile} />
                <span>Nome do Usuário</span>
                <img className='logout' src={Logout} onClick={() => logout()} />
            </div>
        </div>

    )
}

export default Header;
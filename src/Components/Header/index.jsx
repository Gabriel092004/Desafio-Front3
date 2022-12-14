import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Logout from '../../assets/logout.svg';
import Profile from '../../assets/user.svg';
import { clear, getItem, setItem } from '../../utils/storage';
import './styles.css';


function Header({ setShowModalEditProfile }) {
    const usuario = getItem('usuario');

    const navigate = useNavigate()

    function logout() {
        clear()
        navigate('/')
    }

    const Nome = getItem('nome');

    return (
        <div className='container-header'>
            <div className='logo'>
                <img src={Logo} alt='Logomarca Dindin' />
                <h1>Dindin</h1>
            </div>
            <div className='images'>
                <img src={Profile} onClick={() => setShowModalEditProfile(true)} />
                <span>{Nome}</span>
                <img className='logout' src={Logout} onClick={() => logout()} />
            </div>
        </div>

    )
}

export default Header;
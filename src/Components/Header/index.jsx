import Logo from '../../assets/logo.svg'
import Logout from '../../assets/logout.svg'
import Profile from '../../assets/user.svg'
import './styles.css'


const Header = () => {
    return (
        <div className='container-header'>
            <div className='logo'>
                <img src={Logo} alt='Logomarca Dindin' />
                <h1>Dindin</h1>
            </div>
            <div className='images'>
                <img src={Profile} />
                <span>Nome do Usuário</span>
                <img src={Logout} />
            </div>
        </div>

    )
}

export default Header;
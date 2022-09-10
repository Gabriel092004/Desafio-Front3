import './styles.css'
import Logo from '../../assets/logo.svg'
import Profile from '../../assets/user.svg'
import Logout from '../../assets/logout.svg'



const Header = () => {
    return (
        <div className="container-header">
            <img src={Logo} />
            <div className='Imgleft'>
                <img src={Profile} />
                <img src={Logout} />
            </div>
        </div>

    )
}

export default Header;
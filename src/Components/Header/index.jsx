import Logo from '../../assets/logo.svg'
import Logout from '../../assets/logout.svg'
import Profile from '../../assets/user.svg'
import './styles.css'



const Header = () => {
    return (
        <div className="container-header">
            <img src={Logo} />
            <div className='images'>
                <img src={Profile} />
                <img src={Logout} />
            </div>
        </div>

    )
}

export default Header;
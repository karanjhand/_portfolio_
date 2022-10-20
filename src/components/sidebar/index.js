import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHome, faUser, faComputer } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {FaEnvelope, FaHome, FaUser, FaSuitcase} from 'react-icons/fa'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                {/* <FontAwesomeIcon icon={FaHome} color="#4d4d4e" />  */}
                <FaHome/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                {/* <FontAwesomeIcon icon={FaUser} color="#4d4d4e" />  */}
                <FaUser/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                {/* <FontAwesomeIcon icon={FaSuitcase} color="#4d4d4e" />  */}
                <FaSuitcase/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                {/* <FontAwesomeIcon icon={FaEnvelope} color="#4d4d4e" />  */}
                <FaEnvelope/>
            </NavLink>
            
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/karanbir-singh-7106b5173/'>
                    {/* <FontAwesomeIcon icon={FaLinkedin} color="#4d4d46" />   */}
                    <FaLinkedin/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/karanjhand'>
                    {/* <FontAwesomeIcon icon={FaGithub} color="#4d4d46" />   */}
                    <FaGithub/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
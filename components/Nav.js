import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className= {navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li> 
            </ul>
            <ul className={navStyles.content}>
                <li>
                    <a href='/signup' className={navStyles.signup} type="submit">SignUp</a>
                </li>
                <li>
                    <a href='/login' className={navStyles.login} type="submit">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
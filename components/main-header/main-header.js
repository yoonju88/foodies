import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import Classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background';
import NavLink from '../main-header/nav-link'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={Classes.header}>
                <Link href="/" className={Classes.logo}>
                    <Image src={logoImg} alt="A plate with food on it" priority/>
                    NextLevel Food
                </Link>
                <nav className={Classes.nav}>
                    <ul> 
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Food Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
        
    )
}
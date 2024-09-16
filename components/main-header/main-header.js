import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../assets/logo.png'
import Classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background';

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
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Food Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
        
    )
}
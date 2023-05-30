import styles from './style.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import { ActiveLink } from '../ActiveLink'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                
                <a>
                    <Image src={logo} alt="logo" />
                </a>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <p>Home</p>
                    </ActiveLink>

                    <ActiveLink  href="/posts" activeClassName={styles.active}>
                        <p>Conteúdos</p>
                    </ActiveLink>

                    <ActiveLink  href="/sobre" activeClassName={styles.active}>
                        <p>Quem somos?</p>
                    </ActiveLink>
                </nav>

                <a className={styles.readyButton} type="button" href="https://github.com/LauraLunaS">Começar</a>
            </div>
        </header>
    )
}
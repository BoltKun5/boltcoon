/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link';
import Image from 'next/image';
import './global.scss';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <html lang="fr">
            <body>
                <header>
                    <Link href={'/'} className='logo'>
                        <Image src="/logo.png" alt='logo' width={50} height={43} priority />
                    </Link>
                    <nav className="buttons">
                        <Link href={'/work'} className={pathname === '/work' ? 'active' : ''}>
                            Réalisations
                        </Link>
                        <Link href={'/about'} className={pathname === '/about' ? 'active' : ''}>
                            À propos
                        </Link>
                        <Link href={'/contact'} className='contact'>
                            Contact
                        </Link>
                    </nav>
                </header>
                <div className="page">
                    {children}
                </div>
                <footer>
                    <div className="contact">
                        <div className="title">Contact</div>
                        <ul>
                            <li><img src='/icons/mail.svg' alt='' /><a href='mailto:contact@boltcoon.fr'>contact@boltcoon.fr</a></li>
                            <li><img src='/icons/phone.svg' alt='' />06 51 31 35 42</li>
                        </ul>
                    </div>
                    <div className="legal">
                        <div className="title">Légal</div>
                        <ul>
                            <li>
                                <Link href='/legal'>Mentions légales</Link>
                            </li>
                            <li>
                                <Link href='/privacy'>Politique de Confidentialité</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">Copyright © 2023 Boltcoon. Tous droits réservés.</div>
                </footer>
            </body>
        </html >
    )
}
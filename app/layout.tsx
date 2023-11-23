'use client'

import Link from 'next/link';
import Image from 'next/image';
import './global.scss';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Metadata } from 'next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [t, setT] = useState(1);
    return (
        <html lang="fr">
            <body>
                <header>
                    <Image className='logo' src="/logo.png" alt='logo' width={50} height={43} priority />
                    <nav className="buttons">
                        <Link href={'/'} className={pathname === '/' ? 'active' : ''}>
                            Accueil
                        </Link>
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
                            <li><a href='mailto:contact@boltcoon.fr'>contact@boltcoon.fr</a></li>
                            <li>06 51 31 35 42</li>
                        </ul>
                    </div>
                    <div className="legal">
                        <div className="title">Légal</div>
                        <ul>
                            <li>
                                <Link href='/legal'>Mentions légales</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">Copyright © 2023 Boltcoon. Tous droits réservés.</div>
                </footer>
            </body>
        </html>
    )
}
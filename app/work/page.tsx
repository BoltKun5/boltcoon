import Link from "next/link";

import './style.scss'
import Creations from "@/components/Creations/Creations";

export default function Home() {
  return <div className="work">

    <div className="welcome">
      <h4>Réalisations</h4>
      <h2>Découvrez mon travail</h2>
    </div>

    <div className="creations">

      <Creations />

    </div>

    <div className="contact">
      <h3>Encore des question ?</h3>
      <div className="contact-text">On est là pour vous conseiller. Contactez nous pour profiter de conseils sur votre projet</div>
      <div className="link-button">
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  </div>;
}

export const metadata = {
  title: 'Boltcoon - Réalisations',
  icons: '/logo-minified.png'
}
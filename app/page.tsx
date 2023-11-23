import Link from "next/link";

import './style.scss'
import Creations from "@/components/Creations/Creations";

export default function Home() {
  return <div className="home">

    <div className="welcome">
      <h4>Boltcoon</h4>
      <h2>Bringing your vision to its fullest potential</h2>
    </div>

    <div className="skills">
      <h3>What do we do ?</h3>
      <div className="skills-list">
        <div className="skill">
          <div className="title">Développement web</div>
          <div className="desc">Ceci est une description d'exemple</div>
        </div>
        <div className="skill">
          <div className="title">Développement web</div>
          <div className="desc">Ceci est une description d'exemple</div>
        </div>
        <div className="skill">
          <div className="title">Développement web</div>
          <div className="desc">Ceci est une description d'exemple</div>
        </div>
      </div>
    </div>

    <div className="creations">
      <h3>Made by Boltcoon</h3>

      <Creations limit={4} />

      <div className="link-button">
        <Link href='/work'>Voir plus</Link>
      </div>
    </div>

    <div className="about">
      <h3>À propos</h3>
      <div className="about-text">Ceci est le texte de about</div>
      <div className="link-button">
        <Link href='/work'>Voir plus</Link>
      </div>
    </div>

    <div className="contact">
      <h3>Have questions ?</h3>
      <div className="contact-text"></div>
      <div className="link-button">
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  </div>;
}

export const metadata = {
  title: 'Boltcoon',
  icons: '/logo-minified.png'
}
import Link from "next/link";

import './style.scss'
import Creations from "@/components/Creations/Creations";

export default function Home() {
  return <div className="home">

    <div className="welcome">
      <h4>Boltcoon</h4>
      <h2>N'ayez pour seule limite que votre imagination</h2>
    </div>

    <div className="skills">
      <h3>Qu'est-ce que je fais ?</h3>
      <div className="skills-list">
        <div className="skill">
          <div className="title">Site web</div>
          <div className="desc">Que ce soit un site vitrine, une boutique en ligne ou un site sur mesure, votre site offrira le meilleur de ce que le web a à offrir</div>
        </div>
        <div className="skill">
          <div className="title">Applications</div>
          <div className="desc">Pour ordinateur ou pour smartphone, votre application vous proposera une infinité d'outils pour répondre à tous vos besoins</div>
        </div>
        <div className="skill">
          <div className="title">Ressources sur mesure</div>
          <div className="desc">Créateur ou producteur de contenu audiovisuel, imaginons ensemble les outils qui faciliteront votre travail et permettront d'engager votre communauté</div>
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
      <div className="about-text">En tant que développeur web fullstack en freelance, je suis passioné par le processus de réalisation des projets de développement. Je ferais de mon mieux pour mettre les dernières technologies du web au service de vos projets. <br /><br />Mon mot d'ordre, c'est que la seule limite à votre projet, c'est votre imagination.</div>
      <div className="link-button">
        <Link href='/work'>Voir plus</Link>
      </div>
    </div>

    <div className="contact">
      <h3>Des question ?</h3>
      <div className="contact-text">Je suis là pour vous conseiller. Contactez moi pour discuter ensemble de votre projet</div>
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
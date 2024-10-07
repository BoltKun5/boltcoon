import Link from "next/link";

import './style.scss'

export default function Home() {
  return <div className="about">

    <div className="welcome">
      <h4>À propos</h4>
      <h2>Apprenez à me connaître</h2>
    </div>

    <div className="left">
      <div className="title">Qui suis-je</div>
      <div className="text">Derrière Boltcoon se cache Farès, développeur web fullstack et freelance. Après avoir été diplômé d'une licence professionnelle en développement et design web, j'ai décidé de me lancer en tant que freelance afin d'être au plus proche de mes clients.
        Grâce à ce contact sans intermédiaire, je peux proposer un travail qui me correspond : une longévité du projet long terme en utilisant des technologies d'actualité et une priorité au travail bien fait.<br /><br />
        Mon objectif en tant que développeur est de produire un livrable qui répond à toutes les exigences du client et de l'utilisateur. Je m'efforce de répondre au maximum par la positive à la question "est-ce que c'est possible ?", car la seule limite que je souhaite imposer à mes clients, c'est celle de leur imagination.<br /><br />
      </div>
    </div>

    <div className="skills">
      <h3>Mes priorités</h3>
      <div className="skills-list">
        <div className="skill">
          <div className="title">Qualité</div>
          <div className="desc">Afin que vos projets aient un bel avenir, je privilégierais toujours les technologies qui leur correspondent le mieux</div>
        </div>
        <div className="skill">
          <div className="title">Transparence</div>
          <div className="desc">Pour un travail de qualité, une relation de confiance est indispensable. Aucun détail cachés, nous définirons ensemble clairement notre collaboration.</div>
        </div>
        <div className="skill">
          <div className="title">Efficacité</div>
          <div className="desc">Car votre temps est précieux, mes horaires de travail sont modulables pour être disponible quand vous l'êtes.</div>
        </div>
      </div>
    </div>

    <div className="contact">
      <h3>Interessé par une collaboration ?</h3>
      <div className="contact-text">Contactez-moi directement à l'aide du formulaire de contact pour discuter de votre projet</div>
      <div className="link-button">
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  </div>;
}

export const metadata = {
  title: 'Boltcoon - À propos',
  icons: '/logo-minified.png'
}
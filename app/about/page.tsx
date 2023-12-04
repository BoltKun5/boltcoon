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
      <div className="text">Derrière Boltcoon se cache Farès, développeur web fullstack et freelance. Après avoir été diplômé d'une licence professionnelle en développement et design web, j'ai décidé de me lancer en tant que freelance afin de privilégier un travail de qualité pour mes clients. Alerte sur dernières technologies du web, je m'efforce de proposer un travail qui permet une pérénité du projet de mes clients sur le très long terme en utilisant des technologies offrant un potentiel d'amélioration dans le temps.<br /><br />
        Mon objectif en tant que développeur est de produire un livrable qui répond à toutes les exigences du client et de l'utilisateur. La question ne doit pas être &quotest-ce que c'est possible&quot, mais &quotcombien de temps ça prendra&quot. La seule limite que je souhaite imposer à mes clients, c'est celle de leur imagination.<br /><br />J'utilise comme technologies principales ReactJS ou NextJS pour le front-end et Express avec Sequelize pour la création d'API. Je maîtrise également le PHP et Symfony, VueJS et le développement from scratch. 
      </div>
    </div>

    <div className="skills">
      <h3>Mes priorités</h3>
      <div className="skills-list">
        <div className="skill">
          <div className="title">Qualité</div>
          <div className="desc">Afin que vos projets aient un bel avenir, je privilégierais toujours les technologies qui vous correspondent le mieux</div>
        </div>
        <div className="skill">
          <div className="title">Transparence</div>
          <div className="desc">Pour un travail de qualité, une relation de confiance est indispensable. Aucun détail cachés, les devis sont clairs et précis</div>
        </div>
        <div className="skill">
          <div className="title">Efficacité</div>
          <div className="desc">Car votre temps est précieux, je peux m'occuper entièrement de la gestion et de la réalisation durant toute la durée de vie du projet</div>
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
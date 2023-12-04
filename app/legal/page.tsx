import './style.scss'

export default function Home() {
  return <div className="legal_page">

    <h3>MENTIONS LÉGALES</h3>

    <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Boltcoon l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

    <h4>Edition du site</h4>

    <p>Le présent site, accessible à l'URL boltcoon.fr (le « Site »), est édité par :</p>

    <p>Farès Abdelkrim, résidant 17 rue d'Altkirch, 68300, Saint-Louis, de nationalité Française (France),</p>


    <h4>Hébergement</h4>

    <p>Le Site est hébergé par Mehdi Abdelkrim, (contact email : pro.mehdi.abdelkrim@gmail.com).</p>

    <h4>Directeur de publication</h4>

    Le Directeur de la publication du Site est Farès Abdelkrim.

    <h4>Nous contacter</h4>

    <p>Par téléphone : +33651313542<br />
      Par email : contact@boltcoon.fr</p>

    <h4>Données personnelles</h4>

    <p>Le traitement de vos données à caractère personnel est régi par notre Politique de Confidentialité, disponible depuis la section &quotPolitique de Confidentialité&quot, conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).</p>

  </div>;
}

export const metadata = {
  title: 'Boltcoon - Mentions légales',
  icons: '/logo-minified.png'
}
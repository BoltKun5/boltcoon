import './style.scss'
import Creations from "@/components/Creations/Creations";
import Form from '@/components/Form/Form';
import { useState } from "react";

export default function Home() {
  return <div className="contact-page">

    <div className="side">
      <h3>Posez vos questions !</h3>
      <div className="desc">Envie de travailler avec moi ou simple interrogation, je répondrais à vos questions avec plaisir. </div>
    </div>

    <Form />
  </div>;
}

export const metadata = {
  title: 'Boltcoon - Contact',
  icons: '/logo-minified.png'
}
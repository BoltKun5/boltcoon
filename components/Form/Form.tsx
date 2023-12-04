/* eslint-disable @next/next/no-img-element */
'use client'
import React, { FormEvent, useEffect, useState } from "react";
import './style.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({
          name,
          firstName,
          mail,
          subject,
          message
        })
      });
      setSubmitted(true);

      setTimeout(() => {
        setMail('');
        setName('');
        setFirstName('');
        setSubject('');
        setMessage('');
        setChecked(false);
      }, 2000)
    } catch (e) {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (submitted)
      setTimeout(() => {
        setSubmitted(false);
      }, 5000)
  }, [submitted])

  return <>
    <form className={"form" + " " + (submitted ? 'submitted' : '')} onSubmit={handleSubmit}>
      <div className="half">
        <div className="label">Nom</div>
        <input type="text" required value={name} onChange={(e) => setName(e.currentTarget.value)} />
      </div>
      <div className="half">
        <div className="label">Prénom</div>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
      </div>
      <div className="full">
        <div className="label">Adresse mail</div>
        <input type="email" required value={mail} onChange={(e) => setMail(e.currentTarget.value)} />
      </div>
      <div className="full">
        <div className="label">Sujet</div>
        <input type="text" required value={subject} onChange={(e) => setSubject(e.currentTarget.value)} />
      </div>
      <div className="full">
        <div className="label">Message</div>
        <textarea value={message} required onChange={(e) => setMessage(e.currentTarget.value)} />
      </div>

      <div className="check">
        <input type="checkbox" required id="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
        <label htmlFor="checkbox">
          {checked && <img src="/icons/check.svg" alt='checkmark logo' />}
        </label>
        <div>En envoyant ce formulaire, j'accepte que les informations saisies soient utilisées pour me recontacter.</div>
      </div>

      <div className="submit">
        <button className="link-button" type="submit" disabled={loading}>Envoyer</button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </form>
  </>
};

export default Form;
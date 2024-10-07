/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import './style.scss';
import projects from '@/projects.json';

interface Project {
  title: string;
  cat: string;
  desc: string;
  subtitle: string;
  images: { legend: string, src: string }[];
}

const Creations = ({ limit }: { limit?: number }) => {
  const [activeProject, setActiveProjet] = useState<null | Project>(null);
  const [offset, setOffset] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [className, setClassName] = useState('fade-in');

  const closeModal = () => {
    if (className === 'fade-out') return;
    setClassName('fade-out');
    setTimeout(() => {
      setActiveProjet(null);
    }, 300);
  }

  const openModal = (project: Project) => {
    setClassName('fade-in');
    setActiveProjet(project);
    setOffset(0);
    setActiveImage(0);
  }

  return <>
    {activeProject &&
      <div className={"modale-container" + ' ' + className}>
        <div className="modale">
          <div className="top">
            <div className="title">{activeProject.title}</div>
            <div className="close" onClick={() => closeModal()}><img alt='' src='/icons/cross.svg' /></div>
          </div>

          <div className="main">
            <div className="left">
              <div className="cat">{activeProject.cat}</div>
              <div className="subtitle">{activeProject.subtitle}</div>
              <div className="desc" dangerouslySetInnerHTML={{ __html: activeProject.desc }} />
            </div>

            <div className="right">
              <img className="main-image" alt='main image' src={activeProject.images[activeImage].src} />
              <div className="legend">{activeProject.images[activeImage].legend}</div>
              <div className="slider">
                <img src="/icons/arrow-left.svg" alt='arrow left' className={"left-arrow"} onClick={() => {
                  if (offset !== 0) setOffset(offset - 1);
                }} />
                <div className="images-container">
                  <div className="images" style={{ transform: `translateX(calc(${offset * 33 * -1}% + ${1 * offset * -1}%))` }}>{activeProject.images.map((el, index) =>
                    <img key={'image' + index} className={activeImage === index ? 'active' : ''} alt='' src={el.src} onClick={() => setActiveImage(index)} />)}</div>
                </div>
                <img src="/icons/arrow-right.svg" alt='arrow right' className="right-arrow" onClick={() => {
                  if (offset < activeProject.images.length - 3) setOffset(offset + 1);
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>}
    <div className="creations-list">
      {projects.slice(0, limit ?? projects.length + 1).map((el: Project, index) => {
        return <div className="creation" key={"projet" + index}>
          <img alt='' src={el?.images[0].src} />
          <div className="cat">{el.cat}</div>
          <div className="title">{el.title}</div>
          <div className="link-button" onClick={() => { openModal(el) }}>
            Afficher le projet
          </div>
        </div>
      })}
    </div>
  </>
};

export default Creations
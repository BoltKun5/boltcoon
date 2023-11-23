'use client'
import React, { useState } from "react";
import './style.scss';
import projects from '@/projects.json';

interface Project {
  title: string;
  desc: string;
  subtitle: string;
  images: string[];
}

const Modal = ({ limit }: { limit?: number }) => {
  const [activeProject, setActiveProjet] = useState<null | Project>(null);
  const [offset, setOffset] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  return <>
    {activeProject &&
      <div className="modale-container">
        <div className="modale">
          <div className="top">
            <div className="title">{activeProject.title}</div>
            <div className="close" onClick={() => setActiveProjet(null)}><img src='/icons/cross.svg' /></div>
          </div>

          <div className="main">
            <div className="left">
              <div className="subtitle">{activeProject.subtitle}</div>
              <div className="desc" dangerouslySetInnerHTML={{ __html: activeProject.desc }} />
            </div>

            <div className="right">
              <img className="main-image" src={activeProject.images[activeImage]} />
              <div className="slider">
                <img src="/icons/arrow-left.svg" className={"left-arrow"} onClick={() => {
                  if (offset !== 0) setOffset(offset - 1);
                }} />
                <div className="images-container">
                  <div className="images" style={{ transform: `translateX(calc(${offset * 33.33333 * -1}% + ${0 * offset * -1}px))` }}>{activeProject.images.map((el, index) =>
                    <img className={activeImage === index ? 'active' : ''} src={el} onClick={() => setActiveImage(index)} />)}</div>
                </div>
                <img src="/icons/arrow-right.svg" className="right-arrow" onClick={() => {
                  if (offset < activeProject.images.length - 3) setOffset(offset + 1);
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>}
    <div className="creations-list">
      {projects.slice(0, limit ?? projects.length + 1).map((el: Project) => {
        return <div className="creation">
          <img src="placeholder.png" />
          <div className="title">{el.title}</div>
          <div className="link-button" onClick={() => setActiveProjet(el)}>
            Afficher le projet
          </div>
        </div>
      })}
    </div>
  </>
};

export default Modal
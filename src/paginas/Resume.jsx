import React from 'react';
import { studies, experiences } from '../data/resume';
import { Link } from 'react-router-dom';

function Portfolio() {
    //console.log (projects);
    return (
        <>
       <h1>Mi Perfil</h1>
       <div className='container'>
        <h2>Formación</h2>
        <ul>
            {studies.map(study => (
            <li key={study.id}>
                <h3>({study.date}) {study.title}</h3>
                <p>{study.institution}</p>
            </li>
            ))}
        </ul>
      </div>
      <div className="line"></div>
      <div className='container'>
        <h2>Experiencia Laboral</h2>
        <ul>
            {experiences.map(experience => (
            <li key={experience.id}>
                <h3>({experience.date}) {experience.title}</h3>
                 <p>{experience.company}</p>
            </li>
            ))}
        </ul>
      </div>
      <div className="line"></div>
       <div >
        <Link to="/" className='button'>Volver a la home</Link>
      </div>
    </>
    )
  }
  
  export default Portfolio;
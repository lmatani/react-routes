import React from 'react';
import projects from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
    //console.log (projects);
    return (
        <>
        <div className='container'>
       <h1>Lista de proyectos</h1>
        <ul>
            {projects.map(project => (
            <li key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <img src={project.image}></img>
            </li>
            ))}
        </ul>
      </div>
      <div className="line"></div>
      <div className='container'>
        <Link to="/" className='button'>Volver a la home</Link>
      </div>
    </>
      
    )
  }
  
  export default Projects;
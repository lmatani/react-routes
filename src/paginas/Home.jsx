import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
      <div>
        <h1>Bienvenido a mi Portfolio</h1>
        <p>Técnico en informática con más de 4 años de experiencia como desarrollador web fullstack y que actualmente curso estudios de ingeniería.
           Durante mi trayectoria he podido aprender y perfeccionar conocimientos técnicos que me han ayudado a construir mi perfil como programador.</p>
        <p>Me considero una persona organizada y proactivo capaz de trabajar en equipo, fomento la comunicación y las buenas prácticas.</p>
        <p>Puedes consultar más detalles en estos enalces:</p>
        <ul>
            <li id="1">
                <Link to={'/projects'}>Mis proyectos</Link>
            </li>
            <li id="2">
                <Link to={'/resume'}>Mi perfil académico y experiencia laboral</Link>
            </li>
        </ul>
        </div>
      </>
    )
  }
  
  export default Home;
  
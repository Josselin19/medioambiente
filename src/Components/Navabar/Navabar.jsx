import React from 'react';
import * as Scroll from 'react-scroll';
import { Link} from 'react-scroll';
import './Navabar.css';
import DiciembreVerde from '../../assets/img/14DiciembreVerde.png';



function Navabar() {

 
    return (
        <section className="hero is-primary is-medium">
        {/* Hero head: will stick at the top */}
        <div className="hero-head">
          <nav className="navbar is-fixed-top is-transparent">
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item">
                  <img
                    src={DiciembreVerde}
                    alt="14 de abril verde"
                    loading="lazy"
                  />
                </Link>
                <span className="navbar-burger" data-target="navbarMenuHeroA">
                  <span className="bgg" />
                  <span className="bgg"/>
                  <span className="bgg"/>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link className="navbar-item is-active">
                  <i class="fas fa-home mx-1"></i>
                                  Inicio
                  </Link>
                  <Link className="navbar-item" to="consejo" spy={true} smooth={true} offset={-25} duration={500} delay={1000}>
                  <i class="fas fa-check-double mx-1"></i>
                                  Consejos
                  </Link>
                  <Link to="evidencia" className="navbar-item" spy={true} smooth={true} offset={-25} duration={500} delay={1000}>
                  <i class="fas fa-clipboard-list mx-1"></i>
                                  Evidencias
                  </Link>
                  <Link to="about" className="navbar-item" spy={true} smooth={true} offset={-35} duration={500} delay={1000}>
                  <i class="fas fa-address-card mx-1"></i>
                                  Sobre nosotros
                  </Link>
                  <Link to="contact" className="navbar-item" spy={true} smooth={true} offset={-35} duration={500} delay={1000}>
                  <i class="fas fa-address-book mx-1"></i>
                                  Contacto
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Hero content: will be in the middle */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">14 ABRIL</h1>
           
            <h2 className="subtitle"><i class="fab fa-envira fa-rotate-90"></i>  MEDIO  AMBIENTE  <i class="fab fa-envira "></i> </h2>
          </div>
        </div>
       
      </section>
    )
}

export default Navabar

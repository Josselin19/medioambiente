import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Navabar.css';
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
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
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
                  <Link className="navbar-item" to="consejo" spy={true} smooth={true} offset={-190} duration={800} delay={1000}>
                  <i class="fas fa-check-double mx-1"></i>
                                  Consejos
                  </Link>
                  <Link to="evidencia" className="navbar-item" spy={true} smooth={true} offset={-190} duration={800} delay={1000}>
                  <i class="fas fa-clipboard-list mx-1"></i>
                                  Evidencias
                  </Link>
                  <Link to="about" className="navbar-item" spy={true} smooth={true} offset={-190} duration={800} delay={1000}>
                  <i class="fas fa-address-card mx-1"></i>
                                  Sobre nosotros
                  </Link>
                  <Link to="contact" className="navbar-item" spy={true} smooth={true} offset={-190} duration={800} delay={1000}>
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
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
          </div>
        </div>
       
      </section>
    )
}

export default Navabar

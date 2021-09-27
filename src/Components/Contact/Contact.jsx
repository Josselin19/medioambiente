import React from 'react'
import './Contact.css'
import contact  from '../../assets/img/example-3.svg';
function Contact() {
    return (
        <div id="contact" className="container">
            <div className="columns is-variable is-1-mobile is-2-tablet is-2-desktop is-8-widescreen is-2-fullhd">
              <div className="column">
                 <figure>
                     <img className="image is-fullwidth" src={contact} />
                 </figure>
              </div>
              <div className="column is-ancestor has-text-centered">
                 <h3 className="title is-ancestor has-text-centered ">
                     Contacto
                 </h3>
                 <h4 className="titlez">
                    Nombre de la institución:  <span >Centro Escolar "14 de Abril"</span>
                 </h4>
                 <h4 className="titlez">
                 Dirección del correo electronico:
                 </h4>
                 <h4 className="titlez">
                 Número de teléfono:
                 </h4>
                 <h4 className="titlez">
                 Dirección:
                 </h4>
                 <div className="container p-2">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.86286372954!2d-88.35085918555245!3d13.358802090602698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b3076ac2adb89%3A0xcb40eca78c3e2b99!2sCentro%20Escolar%20%2214%20de%20Abril%22!5e0!3m2!1ses!2ssv!4v1632697772781!5m2!1ses!2ssv" width="100%"  height="450" style={{border:0}} allowfullscreen="" loading="lazy"  ></iframe>
                 </div>

              </div>
            </div>
        </div>
    )
}

export default Contact

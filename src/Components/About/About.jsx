import React from 'react'
import './About.css';
function About() {
    return (
        <div id="about" className="container">
            <div className="columns is-variable is-1-mobile is-2-tablet is-2-desktop is-8-widescreen is-2-fullhd">
              <div className="column">
                 <figure>
                     <img className="image is-fullwidthz"  alt="Medio Ambiente"
                                    loading="lazy" 
                                    src="https://res.cloudinary.com/christianzayas/image/upload/v1635392835/Amor/medioambiente/14abril.svg" 
                                    />
                 </figure>
              </div>
              <div className="column">
                 <h3 className="title is-ancestor has-text-centered ">
                    Un poco de la historia de la escuela con el medioambiente.
                 </h3>
            
                 <p>
                 ...
                 </p>

              </div>
            </div>
        </div>
    )
}

export default About

import React , { memo, Suspense , lazy } from 'react';
import Spinner from './Spinner/Spinner';


const  CardEnvironment = lazy(() => import('./Card-Environment/CardEnvironment')) ;
const Footer = lazy(() => import('./Footer/Footer'));
const Evidencia = lazy(() => import('./Evidencia/Evidencia'));
const Contact = lazy(() => import('./Contact/Contact'));
const About = lazy(() => import('./About/About'));




function RouterPath() {
    return (
        <Suspense fallback={<Spinner />}>
             <>
              
              <CardEnvironment/>
              <Evidencia />
              <About/>
              <Contact/>
              <Footer/>
             </>
        </Suspense>
    )
}

export default memo(RouterPath)

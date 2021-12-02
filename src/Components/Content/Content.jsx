import React from 'react'
import './Content.css'
function Content() {
    return (
        <div id='regla' className="text-center ">
            <div className="container  max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center">

                    <div>
                        <h2 className="my-5 title">LA REGLA : REDUCIR, REUTILIZAR, RECICLAR</h2>
                    </div>
                </div>
                <div className="columns  is-variable is-1-mobile is-3-tablet is-3-desktop is-8-widescreen is-2-fullhd">

                <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="colorP">  <i class="fas fa-recycle"></i>  Reducir </p>

                                <p className='padding03'>
                                    • Evitar el sobre envasado. Elegir siempre productos con la menor cantidad de embalajes innecesarios y los que utilicen materiales reciclados
                                </p>
                                <p className='padding03'>
                                    • Reducir la utilización de bolsas de plástico en las compras; llevar siempre una de tela o un carrito de compra.
                                </p>
                                <p className='padding03'>
                                    • Impulsar los procesos de producción limpia. Por ejemplo: reutilizando el papel de regalo.
                                </p>
                                <p className='padding03'>
                                    • Reducir el uso de plástico en envases, embalajes, juguetes, etc.
                                </p>
                            </div>
                        </div>
                    </div>

                    


                    {/* #2 */}

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="colorP"> <i class="fas fa-recycle"></i> Reutilizar </p>
                                <p className='padding03'>
                                    • Utilizar envases de vidrio, es 100% reciclable sin perder su calidad. Además, no se necesitan químicos para su elaboración.
                                </p>
                                <p className='padding03'>
                                    • Al usar el papel para escribir o imprimir, aprovechar las dos caras. También es posible fabricar pequeños blocks de notas con papel sobrante.
                                </p>
                                <p className='padding03'>
                                    • Utilizar filtros de café no descartables que pueden ser lavados y reutilizados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* #3 */}

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <p className="colorP"> <i class="fas fa-recycle"></i>  Reciclar </p>
                                <p className='padding03'>
                                    • El reciclado de los materiales es el último paso antes del pretratamiento y la eliminación de los residuos. Reciclar significa utilizar un residuo para obtener un producto similar al originario.
                                </p>
                                <p className='padding03'>
                                    • El reciclado permite reintroducir los distintos materiales en los ciclos de la producción, ahorrando materias primas y disminuyendo el flujo de residuos que van a parar a los tratamientos de disposición final.
                                </p>
                                <p className='padding03'>
                                    • Para residuos de carácter orgánico: pueden ser “compostados” para ser usados como abono de uso domiciliario o rural.
                                </p>
                                <p className='padding03'>
                                    • Los cartones, el papel, los vidrios, los metales, pueden ser de utilidad para algunas empresas o cooperativas que los reciclan.
                                </p>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Content



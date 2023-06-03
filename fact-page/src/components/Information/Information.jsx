import './information.css'

const Information =()=>{
    return(
        <section className='principal-container'>
            <div className="informacion-empresa">
                <div className="about-us img-information">
                    <img src="../../public/logo_fact.png" alt="" />
                </div>
                <div className="about-us text-information">
                    <h2>Acerca de nosotros</h2>
                    <p>
                        FANC es una libreria ubicada en diferentes zonas de colombia
                        con sede principal en Pereira, esta pagina nace como producto
                        de nuestra necesidad de sumergirnos en el mundo virtual para 
                        abarcar mas fronteras.<br></br><br></br>

                        Aqui encontraras diferentes libros que tenemos en stock para su 
                        venta de forma virual, primero tendras que registrarte si quieres
                        hacer una reserva o una compra, te haremos llegar el libro a donde 
                        quiera que estes!.
                    </p>
                </div>
            </div>
            <div className="seccion-fotos-informacion">
                <h2>Conocenos mejor</h2>
                <div className="fotos-libreria">
                    <div className="foto-informacion first-foto-info">
                        <div className="foto-local">
                            <img src="../../public/Imgs/our-place1.jpg" alt="" />
                        </div>
                        <p>
                            Nos encontraran alrededor de colombia en ciudades como Bogota
                            Manizales, Medellin, y nuestra sede principal se ubica en pereira, 
                            las instalaciones cuentan con las comodidades necesarias para 
                            hacer de tu experiencia lectora algo unico. <br /><br />
                            No dudes en visitarnos!.
                        </p>
                    </div>
                    <div className="foto-informacion second-foto-info">
                        <div className="foto-local">
                            <img src="../../public/Imgs/our-place2.jpg" alt="" />
                        </div>
                        <p>
                            Somos amantes de la literatura y queremos conocer todos los 
                            gustos de nuestros lectores, puedes enviarnos recomendaciones 
                            de libros que te gustaria que tuvieramos en nuestro stock 
                            y asi ampliar mas las opciones que podemos ofrecerte.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Information
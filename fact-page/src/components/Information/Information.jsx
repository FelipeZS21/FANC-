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
                        con sede rincipal en Pereira, esta pagina nace como producto
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
                <h2>Conozcanos mejor</h2>
                <div className="fotos-libreria">
                    <div className="first-foto-informacion">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                    <div className="second-foto-informacion">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                    <div className="third-foto-informacion">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Information
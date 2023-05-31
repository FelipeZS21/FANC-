import './Slider.css'

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++; 
    if(counter > 4){
        counter = 1;
    }
}, 7000); 

const Slider = () =>{
    return(
        <div className="slider">
            <div className="slides">
                <input type="radio" className='radio-btn' id='radio1'/>
                <input type="radio" className='radio-btn' id='radio2'/>
                <input type="radio" className='radio-btn' id='radio3'/>
                <input type="radio" className='radio-btn' id='radio4'/>

                <div className="slide first">
                    <div className="text-about">
                        <h1>Gusto en verte!</h1>
                        <p>
                            Bienvenido a la libreria virtual FANC 
                        </p>
                    </div>
                    <img src="../../public/Imgs/image1.jpg" alt="" />
                </div>
                <div className="slide">
                    <div className="text-about">
                        <h1>Nuevos libros</h1>
                        <p>
                            Revisa el catalogo para encontrar libros de 
                            diferentes categorias! cada uno es un mundo nuevo por explorar.
                        </p>
                    </div>
                    <img src="../../public/Imgs/image2.jpg" alt="" />
                </div>
                <div className="slide">
                    <div className="text-about">
                        <h1>Nuestras sedes</h1>
                        <p>
                            Puedes visitir nuestras diferentes sedes alrededor de Colombia!
                            te esperamos con ansias.
                        </p>
                    </div>
                    <img src="../../public/Imgs/image3.jpg" alt="" />
                </div>
                <div className="slide">
                    <div className="text-about">
                        <h1>Compra tus libros favoritos!</h1>
                        <p>
                            Inicia sesion y accede a los diferentes metodos para poder conseguir
                            tu libro favorito. 
                        </p>
                    </div>
                    <img src="../../public/Imgs/image4.jpg" alt="" />
                </div>
                
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>

            <div className="navigation-manual">
                <label htmlFor="radio1" className='manual-btn'></label>
                <label htmlFor="radio2" className='manual-btn'></label>
                <label htmlFor="radio3" className='manual-btn'></label>
                <label htmlFor="radio4" className='manual-btn'></label>
            </div>
        </div>
    )
}

export default Slider
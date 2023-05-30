import './Slider.css'

var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++; 
    if(counter > 4){
        counter = 1;
    }
}, 5000); 

const Slider = () =>{
    return(
        <div className="slider">
            <div className="slides">
                <input type="radio" className='radio-btn' id='radio1'/>
                <input type="radio" className='radio-btn' id='radio2'/>
                <input type="radio" className='radio-btn' id='radio3'/>
                <input type="radio" className='radio-btn' id='radio4'/>

                <div className="slide first">
                    <img src="../../public/Imgs/image1.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../public/Imgs/image2.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="../../public/Imgs/image3.jpg" alt="" />
                </div>
                <div className="slide">
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
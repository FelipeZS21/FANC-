import './Footer.css'

const Footer =()=>{
    return(
        <div className="principal-footer-container">
            <div className="section-footer first-footer-container">
                <img src="../../Public/logo_fact.png" alt="" />
            </div>
            <div className="section-footer second-footer-container">
                <h3>Todos los derechos reservados | Copyright ©
                    <br /><br />  Colombia - Pereira <br /><br /> 
                    Universidad Tecnologica de Pereira
                </h3>
                
            </div>
            <div className="section-footer third-footer-container">
                <img src="../../Public/Imgs/redes.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
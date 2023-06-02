import '../assets/css/LoginUsers.css'
import Log from '../components/Log'
import Header from "../components/Header/Header"

const LoginUsers = () =>{
    return (
        <div className="principal">
            <div className="bar-nav">
                <Header></Header>
            </div>
            <section className='login-container'>
                <Log></Log>
            </section>
        </div>
    )
}

export default LoginUsers
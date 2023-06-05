import '../assets/css/LoginUsers.css'
import Log from '../components/Log'
import Header from "../components/Header/Header"
import ReactPlayer from 'react-player'

const LoginUsers = () =>{
    return (
        <div className="principal-login-users">
            <div className="bar-nav">
                <Header></Header>
            </div>
            <div className="login-users-container">
                <div className='login-container'>
                    <Log></Log>
                </div>
            </div>
        </div>
    )
}

export default LoginUsers
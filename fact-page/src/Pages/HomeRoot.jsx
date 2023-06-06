import ShowAdmins from '../components/ShowAdmins/ShowAdmins'
import '../assets/css/HomeRoot.css'
import HeaderRoot from "../components/HeaderRoot/HeaderRoot"


const HomeRoot = () =>{
    return(
        <div className="principal">
            <main className="container-home-page-root">
                <ShowAdmins></ShowAdmins>
            </main>
            <div className="bar-nav">
                <HeaderRoot></HeaderRoot>
            </div>  
        </div>
    )
}

export default HomeRoot
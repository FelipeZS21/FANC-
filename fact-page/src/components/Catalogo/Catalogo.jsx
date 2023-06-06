import './Catalogo.css'
import React, {useState, useEffect} from "react";
import axios from "axios";

const Catalogo = () =>{
    
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowInformation')
            setUserList(data)
        };
        // then call it here
        getUsers();
    }, []);

    return(
        <div className="principal-box-books">
            <h2 className='principal-text-show-fav-books'>Catalogo</h2>
            <div className="principal-main-show-books">
                {userList.map((user, index) => (
                    <div className='box-books' key={index}>
                        <div className="container-new-books">
                        <img src={user.IMAGEN} alt="" />
                            <div className="text-box-book">
                                <h2>{user.TITULO}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="divisor-of-show-books"></div>
        </div>  
    )
}

export default Catalogo 
import './ShowBooksHome.css'
import React, {useState, useEffect} from "react";
import axios from "axios";

const ShowBooksHome =()=>{

    const [userList, setUserList] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('http://localhost:3002/ShowInformation')
            setUserList(data)
        };
        // then call it here
        getUsers();
    }, []);

    const img = "../../Public/Imgs/"

    return(
        <div className="principal-main-show-books">
            {userList.map((user, index) => (
                <div className='box-books' key={index}>
                    <div className="container-new-books">
                        <div className="text-box-book">
                            <h2>{user.TITULO}</h2>
                        </div>
                        <img src={user.IMAGEN} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowBooksHome
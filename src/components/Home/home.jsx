import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/usersSlice";
import { Link } from "react-router-dom";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";


export const Home=()=>{
    const {users,loading,error}=useSelector((state)=>state.users);
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme.theme);

    useEffect(()=>{dispatch(fetchUsers())},[dispatch]);
    return (
        <div >
            <Header/>
            <div className={`container ${theme}`}>
                <div className='info'>
                    <h1>Users</h1>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error{error}</p>}
                    {users.length ? <ul>
                        {users.map(user=>(
                        <li key={user.id}><Link className={theme==='light'?'a-light':'a-dark'} to={`/item/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>:null}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
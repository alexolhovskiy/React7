import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/userSlice";
import { Link, useParams } from "react-router-dom";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";


export const UserItem=()=>{
    const {id}=useParams();
    const {user,loading,error}=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme.theme);

    useEffect(()=>{dispatch(fetchUser(id))},[dispatch,id]);
    return (
        <div>
            <Header/>
            <div className={`container ${theme}`}>
                <div className="info">
                    {loading && <p>Loading...</p>}
                    {error && <p>Error{error}</p>}
                    {console.log(user)}
                    <h1>{user.name}</h1>
                    <p>id : {user.id}</p>
                    <p>username : {user.username}</p>
                    <p>email:{user.email}</p>
                    <p>phone : {user.phone}</p>
                    <p>website : {user.website}</p>
                    {/* <h3>address</h3>
                    <p>city: {user.address.city}</p>
                    <p>street: {user.address.street}</p> 
                    <p>suite: {user.address.suite}</p> 
                    <p>zipcode: {user.address.zipcode}</p>
                    <h3>company</h3>
                    <p>name: {user.company.name}</p> 
                    <p>catchPhrase: {user.company.catchPhrase}</p> 
                    <p>bs: {user.company.bs}</p> */}
                    <Link className={theme==='light'?'a-light':'a-dark'} to='/'>Home</Link>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
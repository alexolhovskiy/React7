import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/slices/themeSlice";
import { useDispatch,useSelector } from "react-redux";

export const Header=()=>{
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme.theme);
    const name=useSelector((state)=>state.registration.name);
    console.log(theme,name);

    const setTheme=()=>{
        dispatch(changeTheme());
    }

    return(
        <Box className='container h_f'>
            <Box className='block'style={{width:"60%"}}>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/registration'>Registration</Link>
            </Box>

            <Box className='block'style={{width:"40%"}}>
                <Button variant="outlined" size="small" onClick={setTheme}>
                    {theme} {/* Отображаем текущую тему */}
                </Button>
                <Box className="user">
                    {name}
                </Box>
            </Box>
        </Box>
    )
} 
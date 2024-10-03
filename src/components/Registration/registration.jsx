import { Box,Typography,TextField,Button } from "@mui/material";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { useDispatch, useSelector} from "react-redux";
import { changeName } from "../../redux/slices/registrationSlice";
import { useState } from 'react';

export const Registration=()=>{
    const dispatch=useDispatch();
    const [value,setValue]=useState("");
    const theme=useSelector((state)=>state.theme.theme);


    const setUser=()=>{
        if(value.trim()==""){
            setValue("");
            return 
        }
        dispatch(changeName(value));
        setValue("");
    }

    const style=`container reg ${theme}`;

    let textFieldStyles={
        '& label': { color: 'grey' }, 
        '& label.Mui-focused': { color: 'blue' },  
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'grey' },  
            '&:hover fieldset': { borderColor: 'blue' }, 
            '&.Mui-focused fieldset': { borderColor: 'blue' },  
        },
    }
    let textStyle={
        style: { color: 'black' } 
    }

    if (theme=='dark'){
        textFieldStyles = {
            '& label': { color: 'white' },  
            '& label.Mui-focused': { color: 'yellow' },  
            '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },  
                '&:hover fieldset': { borderColor: 'yellow' },  
                '&.Mui-focused fieldset': { borderColor: 'yellow' }, 
            },
        };

        textStyle={
            style: { color: 'white' } 
        }
    }

    return(
        <>
            <Header/>
            <Box className={style}>
                <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    Registration
                </Typography>
                <TextField id="outlined-basic" label="User" variant="outlined" size="small"
                 value={value}
                 onChange={(e)=>(setValue(e.target.value))}
                 sx={textFieldStyles}
                 InputProps={textStyle}
                 />
                <Button variant="outlined"size="small"
                onClick={setUser}
                >Set User</Button>
            </Box>
            <Footer/>
        </>
    )
}
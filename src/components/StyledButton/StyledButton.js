import { styled } from "@mui/material";
import {ReactNode} from 'react'


interface StyledButtonProps{
  childre:ReactNode
}

const CustomButton: React.FC<StyledButtonProps> = ({children}) => { 
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,     
        borderRadius: '3px',
        padding: '5px 15px',
        width: '100%',
        color: theme.palette.primary.contrastText,
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'10px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    }));
    
    return (
      <>
        <StyledButton>
            {children}

        </StyledButton>     
      </>
    ); 
}

export default CustomButton;

/*import {styled} from "@mui/material"

const StyledButton = ()=> { 
    
    
    const StyledButton = styled("button")(({ theme })=>({
            backgroundColor:'transparent',
            border:'1px solid $ {theme.palette.primary.contrastText}',     
            borderRadius:'3px',
            padding:'5px 15px',
            width:'100%',
    }))
    
    
    
    return (
      <>
        <StyledButton>Texto</StyledButton>     
      </>
     ); 
  }
  
  export default StyledButton;*/
import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root{
    color: ${props => props.theme.colors.text};
  }
  .MuiInputLabel-root {
    color: ${props => props.theme.colors.text};

    &.Mui-focused{
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .MuiOutlinedInput-root {
    border-radius: 10px;
    
    & fieldset {
      border-color: ${props => props.theme.colors.text};
    }

    &:hover fieldset {
      border-color: ${props => props.theme.colors.primary};
    }

    &.Mui-focused fieldset {
      border-color: ${props => props.theme.colors.primary};
    }
  }

  .material-icons{
    color: ${props => props.theme.colors.text};
  }
`
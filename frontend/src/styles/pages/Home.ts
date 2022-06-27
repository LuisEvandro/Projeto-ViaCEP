import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

export const ContainerHome = styled(Box)<BoxProps>`
  .search_content{
    display: flex;
    justify-content: center;

    .title{
      text-align: center;
      margin-top: 15px;
      margin-bottom: 25px;
      font-size: 1.2rem;
    }

    #search_cep-helper-text{
      color: ${props => props.theme.colors.text};
      margin-left: 1px;
    }
  }

  .cep_data_content{
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 35px;
    p{
      text-transform: capitalize;
      margin-bottom: 8px;
      font-size: 1rem;
      font-weight: bold;

      span{
        font-weight: normal;
        font-size: 1.1rem;
      }
    }
  }
`
import { Backdrop, CircularProgress, IconButton } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { API_CEP } from '../services/api';
import { TextFieldStyled } from '../styles/components/TextField/index';
import { ContainerHome } from '../styles/pages/Home';

interface ICEP {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  created_at?: string;
}

interface IResponseCEP {
  result: ICEP;
  error: any;
}

export default function Home() {
  const [cep, setCep] = useState<string>('');
  const [cepResult, setCepResult] = useState<null | ICEP>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const config_toaster = {
    autoClose: 4000,
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  };

  const changeCepValue = (value: string) => {
    value = value.trim().replace('-', '').replace(/[^\d]/g, '');

    if (value.length > 8) return;

    setCep(value);
  };

  const searchCEP = async () => {
    if (!cep && cep.length < 7) {
      return toast.error('CEP Inválido, tente novamente !', config_toaster);
    }

    setLoading(true);

    try {
      await API_CEP.get(`${cep}`).then((response) => {
        const data: IResponseCEP = response.data;

        if (data.error) {
          toast.error(data.error, config_toaster);
        } else {
          data.result.cep = data.result.cep.replace('-', '');

          if (!data.result.cep.includes('-')) {
            data.result.cep =
              data.result.cep.substring(0, 5) +
              '-' +
              data.result.cep.substring(5, 8);
          }

          setCepResult(data.result);
        }
      });
      setLoading(false);
    } catch (e: any) {
      toast.error(
        'CEP inválido ou inexistente , tente novamente !',
        config_toaster
      );
      setLoading(false);
    }
  };

  return (
    <ContainerHome>
      <Backdrop sx={{ zIndex: 300 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="search_content">
        <div className="box_search">
          <p className="title">Digite o CEP para buscar:</p>

          <TextFieldStyled
            type="text"
            required
            id="search_cep"
            label="CEP"
            value={cep}
            helperText='Exemplo: "01001000"'
            onChange={(event) => changeCepValue(event.target.value)}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key === 'Enter') {
                searchCEP();
              }
            }}
            InputProps={{
              endAdornment: (
                <IconButton aria-label="Buscar CEP" onClick={searchCEP}>
                  <span className="material-icons">search</span>
                </IconButton>
              ),
            }}
          />
        </div>
      </div>

      {cepResult && (
        <div className="cep_data_content">
          <div className="main_data">
            {Object.entries(cepResult).map(([key, value]) => {
              if (key != 'created_at') {
                return (
                  <p className={key} key={key}>
                    {key}: <span>{value}</span>
                  </p>
                );
              }
            })}
          </div>
        </div>
      )}
    </ContainerHome>
  );
}

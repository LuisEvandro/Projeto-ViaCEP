import axios from "axios"

export function ApiClientViaCep(ctx?: any){
  // Alterar a URL da API do via cep de acordo com a que está rodando na sua maquina
  const baseUrlViacep = 'http://localhost:3333/api/viacep/'

  const api = axios.create({
    baseURL: baseUrlViacep
  })

  api.interceptors.request.use(config => {
    return config
  })

  return api
}
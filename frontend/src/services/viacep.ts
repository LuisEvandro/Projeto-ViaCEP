import axios from "axios"

export function ApiClientViaCep(ctx?: any){
  const baseUrlViacep = 'http://localhost:3333/api/viacep/'

  const api = axios.create({
    baseURL: baseUrlViacep
  })

  api.interceptors.request.use(config => {
    return config
  })

  return api
}
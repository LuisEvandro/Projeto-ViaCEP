import axios from 'axios'

export function ApiClientViaCep (ctx?: any) {
  const baseUrlViacep = 'https://viacep.com.br/ws/'

  const api = axios.create({
    baseURL: baseUrlViacep
  })

  api.interceptors.request.use(config => {
    return config
  })

  return api
}

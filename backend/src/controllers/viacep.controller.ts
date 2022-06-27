import { API_CEP } from 'src/services/api/api'
import { createCep, getCep } from 'src/services/viaCep.service'

export const findCep = async (cep: string) => {
  const data = await getCep(cep)

  const typeReturn = 'json'

  if (data.error) {
    return data
  }

  if (data.result) {
    return data
  } else {
    const resp = await API_CEP.get(`${cep}/${typeReturn}`).then(async (response) => {
      if (response.status === 400) {
        return { result: null, error: 'CEP Inválido' }
      }

      if (response.status === 200) {
        const data = response.data

        if (data.erro) {
          return { result: null, error: 'CEP Não encontrado.' }
        } else {
          data.cep = data.cep.replace('-', '')

          return await createCep(data)
        }
      }
    })

    return resp
  }
}

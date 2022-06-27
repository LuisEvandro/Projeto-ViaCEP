import { findCep } from '@controllers/viacep.controller'
import express from 'express'

const router = express.Router()

router.get('/viacep/:cep', async (req: express.Request, res: express.Response) => {
  try {
    const cep: string = req.params.cep

    const data = await findCep(cep)

    if (data.error) {
      res.status(400).send(data)
    } else {
      res.status(200).send(data)
    }
  } catch (error: any) {
    res.status(400).send({ result: null, error: 'CEP Inválido' })
  }
})

export default router

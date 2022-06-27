// eslint-disable-next-line no-unused-vars
import { ICEP } from '@models/viacep.model'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const cepCache = prisma.cepCache

export const getCep = async (cep: string) => {
  cep = cep?.replace('-', '')

  try {
    const result = await cepCache.findUnique({
      where: {
        cep
      }
    })

    return { result, error: null }
  } catch (error: any) {
    return { result: null, error }
  }
}

export const createCep = async (data: ICEP) => {
  try {
    const result = await cepCache.create({
      data: {
        ...data
      }
    })

    return { result, error: null }
  } catch (error: any) {
    return { result: null, error }
  }
}

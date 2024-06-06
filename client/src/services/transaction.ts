import { BaseResponse } from '../types/BaseResponse'
import api from './api'

type T = {
  date: Date
  amount: number
  type: string
  category: string
  paymentMethod: string
}

type Transaction = {
  user: string
  date: Date
  amount: number
  type: string
  category: string
  paymentMethod: string
}

const createTransaction = async (data: T) => {
  const res = await api.post<BaseResponse<Transaction>>('/transaction/create', data)
  return res.data
}

const getAllExpenses = async () => {
  const res = await api.get<BaseResponse<Array<Transaction>>>('/transaction/expenses')
  return res.data
}

const getAllIncomes = async () => {
  const res = await api.get<BaseResponse<Array<Transaction>>>('/transaction/incomes')
  return res.data
}

export { createTransaction, getAllExpenses, getAllIncomes }
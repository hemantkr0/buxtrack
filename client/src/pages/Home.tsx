import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import api from '../services/api'
import { BaseResponse } from '../types/BaseResponse'
import Loader from '../components/Loader'
import { UserContext } from '../context/userContext'

const Home: React.FC = (): React.ReactElement => {
  const { user } = useContext(UserContext)

  const queryFn = async () => {
    const res = await api.get<BaseResponse<Array<{ name: string; age: number }>>>('/test')
    return res.data
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <>Errrr!!</>
  }

  return (
    <main className="px-8 mx-auto max-w-screen-2xl">
      <div className="my-8">
        <h1 className="text-2xl font-semibold">Hello, {user?.name}</h1>
      </div>
      <div>
        {data?.data.map((item, idx) => {
          return (
            <div key={idx}>
              {item.name} - {item.age}
            </div>
          )
        })}
        this is the new code
      </div>
    </main>
  )
}
export default Home

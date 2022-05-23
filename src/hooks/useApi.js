import { useState, useEffect } from "react"

const useApi = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url)
        const data1 = await res.json()
        setData(data1.data)
        console.log(data1.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
        console.log(error)
      }
    }
    getData()
  }, [])

  return { loading, data, error }
}

export default useApi

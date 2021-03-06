import useApi from "./hooks/useApi"
import Card from "./Card"

export default function App() {
  const { loading, error, data } = useApi("https://reqres.in/api/users?page=2")

  if (loading) {
    console.log(loading)
    return <h1>Loading</h1>
  }

  return (
    <div className="layout">
      {data && data.map((item) => <Card key={item.id} item={item} />)}
    </div>
  )
}
